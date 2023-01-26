const {Movie} = require('../models/models');

module.exports = {
    getAll: async (query) => {
        const {
            perPage = 16,
            page = 1,
            sortBy = 'createdAt',
            order = 'asc',
            ...filters
        } = query;

        // console.log(query);

        const orderBy = order === 'asc' ? -1 : 1;

        const filterObject = {};
        const voteFilters = {};

        Object.keys(filters).forEach((filterParam) => {
            switch (filterParam) {
                case 'isNetflix': {
                    filterObject.isNetflix = filters.isNetflix;
                    break;
                }

                case 'isSeries': {
                    filterObject.isSeries = filters.isSeries;
                    break;
                }

                // case 'genre': {
                //     const rolesArr = filters.genre.split(';');
                //
                //     filterObject.genre = {$in: rolesArr};
                //     break;
                // }


                // case 'title': {
                //     filterObject.title = {$regex: `^${filters.name}`, $options: 'gi'};
                //     break;
                // }

                case 'vote.lte': {
                    Object.assign(voteFilters, {$lte: filters['vote.lte']});
                    break;
                }


                default: {
                    filterObject[filterParam] = filters[filterParam];
                }

            }
        });

        console.log(filterObject)

        const {count, rows: movies} = await Movie.findAndCountAll({
            where: filterObject,
            order: [
                [sortBy, order]
            ],
            limit: (+perPage),
            offset: (page-1)*perPage
        })
            // .sort({[sortBy]: orderBy}).limit(+perPage).skip((page-1)*perPage);
        // console.log(movies.length)

        return {movies, count}
    }
};