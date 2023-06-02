export default {
    name: 'category',
    title: 'Categories',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true
            }
        },
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 90
            }
        },
        {
            name: 'technologies',
            title: 'Technologies',
            type: 'array',
            of: [
                {
                    name: 'technology',
                    title: 'Technology',
                    type: 'reference',
                    to: {
                        type: 'technology',
                    }
                }
            ]
        }
    ]
}