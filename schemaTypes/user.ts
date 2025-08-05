import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'user',
  title: 'Usuario',
  type: 'document',
  fields: [
    defineField({
      name: 'firebaseId',
      title: 'Firebase ID',
      type: 'string',
      description: 'ID único del usuario en Firebase',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'name',
      title: 'Nombre',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: 'avatar',
      title: 'Avatar',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'role',
      title: 'Rol',
      type: 'string',
      options: {
        list: [
          {title: 'Comensal', value: 'guest'},
          {title: 'Administrador', value: 'admin'},
          {title: 'Anfitrión', value: 'host'},
        ],
      },
      initialValue: 'guest',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'phone',
      title: 'Teléfono',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'locations',
      title: 'Sedes Asignadas',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'location'}]}],
      description: 'Sedes donde este usuario es anfitrión',
      hidden: ({document}) => document?.role !== 'host',
    }),
    // Optional fields
    defineField({
      name: 'isActive',
      title: 'Usuario Activo',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'deletedAt',
      title: 'Fecha de Eliminación',
      type: 'datetime',
      description: 'Campo para soft delete - no eliminar físicamente',
      readOnly: true,
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
      subtitle: 'email',
      media: 'avatar',
    },
  },
}) 