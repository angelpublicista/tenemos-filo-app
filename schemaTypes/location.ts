import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'location',
  title: 'Sede',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nombre de la Sede',
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
      name: 'company',
      title: 'Empresa',
      type: 'reference',
      to: [{type: 'company'}],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'isMain',
      title: 'Sede Principal',
      type: 'boolean',
      description: 'Marcar si esta es la sede principal de la empresa',
      initialValue: false,
    }),
    defineField({
      name: 'description',
      title: 'Descripción',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'address',
      title: 'Dirección',
      type: 'object',
      fields: [
        {
          name: 'street',
          title: 'Calle y Número',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'city',
          title: 'Ciudad',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'state',
          title: 'Estado/Provincia',
          type: 'string',
        },
        {
          name: 'postalCode',
          title: 'Código Postal',
          type: 'string',
        },
        {
          name: 'country',
          title: 'País',
          type: 'string',
        },
        {
          name: 'coordinates',
          title: 'Coordenadas',
          type: 'geopoint',
        },
      ],
    }),
    defineField({
      name: 'contactInfo',
      title: 'Información de Contacto',
      type: 'object',
      fields: [
        {
          name: 'phone',
          title: 'Teléfono',
          type: 'string',
        },
        {
          name: 'email',
          title: 'Email',
          type: 'string',
        },
      ],
    }),
    defineField({
      name: 'capacity',
      title: 'Capacidad para Eventos',
      type: 'object',
      fields: [
        {
          name: 'minGuests',
          title: 'Mínimo de Invitados',
          type: 'number',
        },
        {
          name: 'maxGuests',
          title: 'Máximo de Invitados',
          type: 'number',
        },
      ],
    }),
    defineField({
      name: 'isActive',
      title: 'Sede Activa',
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
      subtitle: 'company.name',
      media: 'company.logo',
    },
  },
}) 