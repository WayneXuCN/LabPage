module Jekyll
  class LocalizationExistsTag < Liquid::Tag
    def initialize(tag_name, key, tokens)
      super
      @key = key.strip()
    end

    def render(context)
      content = Liquid::Template.parse(@key).render context
      exists = true
      site = context.registers[:site]
      language = if site.respond_to?(:active_lang) && site.active_lang
        site.active_lang
      else
        site.config['default_lang'] || site.config['languages']&.first
      end
      if !content.include? "." or site.data[language] == nil
        exists = false
      end

      current_element = site.data[language] ? site.data[language]['strings'] : nil
      if current_element == nil
        exists = false
      end
      splittedKey = content.split('.')

      if exists
        for part in splittedKey do
          if current_element.key?(part)
            current_element = current_element[part]
          else
            exists = false
            break
          end
        end
      end

      "#{exists}"
    end
  end
end

Liquid::Template.register_tag('localization_exists', Jekyll::LocalizationExistsTag)
