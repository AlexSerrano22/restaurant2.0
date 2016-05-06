/**
 * Created by alex on 19/02/2016.
 */

    dust.helpers.isEquals = function(chunk, context, bodies, params) {
        var val1 = params.subM,
            val2 = params.menu,
            name = params.name,
            body = bodies.block;
        if (val2 === val1) {
            chunk.render(body, context);
        } else {
            dust.log('WARN', 'missing parameter "val1 or va2" in period helper');
        }
        return chunk;
    };