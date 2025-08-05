import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'company',
  title: 'Empresa',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nombre de la Empresa',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Descripción',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'companyType',
      title: 'Tipo de Empresa',
      type: 'string',
      options: {
        list: [
          {title: 'Restaurante', value: 'restaurant'},
          {title: 'Catering', value: 'catering'},
          {title: 'Food Truck', value: 'foodtruck'},
          {title: 'Otro', value: 'other'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'locations',
      title: 'Sedes',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'location'}]}],
      description: 'Sedes de la empresa (debe tener al menos una sede principal)',
    }),
    defineField({
      name: 'contactInfo',
      title: 'Información de Contacto',
      type: 'object',
      fields: [
        {
          name: 'email',
          title: 'Email',
          type: 'string',
          validation: (Rule) => Rule.required().email(),
        },
        {
          name: 'phone',
          title: 'Teléfono',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
      ],
    }),
    defineField({
      name: 'address',
      title: 'Dirección Principal',
      type: 'object',
      fields: [
        {
          name: 'street',
          title: 'Calle y Número',
          type: 'string',
        },
        {
          name: 'city',
          title: 'Ciudad',
          type: 'string',
        },
        {
          name: 'state',
          title: 'Estado/Provincia',
          type: 'string',
        },
      ],
    }),
    defineField({
      name: 'isActive',
      title: 'Empresa Activa',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'createdAt',
      title: 'Fecha de Creación',
      type: 'datetime',
      readOnly: true,
    }),
    defineField({
      name: 'updatedAt',
      title: 'Fecha de Actualización',
      type: 'datetime',
      readOnly: true,
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'companyType',
      media: 'logo',
    },
  },
}) 