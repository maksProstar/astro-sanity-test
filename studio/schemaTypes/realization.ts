import {defineField, defineType} from 'sanity'

export const realization = defineType({
  name: 'realization',
  title: 'Realizacja',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Tytuł realizacji',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'slug',
      title: 'Adres strony',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'category',
      title: 'Kategoria',
      type: 'string',
      options: {
        list: [
          {title: 'Kuchnie', value: 'kuchnie'},
          {title: 'Szafy', value: 'szafy'},
          {title: 'Garderoby', value: 'garderoby'},
          {title: 'Łazienki', value: 'lazienki'},
          {title: 'Inne', value: 'inne'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'description',
      title: 'Opis',
      type: 'text',
      rows: 4,
    }),

    defineField({
      name: 'image',
      title: 'Zdjęcie główne',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: 'featured',
      title: 'Pokazać na stronie głównej?',
      type: 'boolean',
      initialValue: true,
    }),
  ],

  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
      media: 'image',
    },
  },
})