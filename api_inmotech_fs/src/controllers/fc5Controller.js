const db = require('../models');
const { Op, sequelize } = require('sequelize');

const Inmueble = db.Inmueble;
const TipoEdificacion = db.TipoEdificacion;
const Acerca_edificacion = db.AcercaEdificacion;
const Division = db.Division;
const OtrasCaracteristicas = db.OtrasCaracteristicas;
const Asignacion = db.Asignacion;
const OrganizacionParqueadero = db.OrganizacionParqueadero;
const PlatformUser = db.PlatformUser;
const PlatformProfile = db.PlatformProfile;
const Direccion = db.Direccion;
const DesignadorCardinal = db.DesignadorCardinal;
const Localizacion = db.Localizacion;
const BarrioCiudadCorregimientoVereda = db.BarrioCiudadCorregimientoVereda;
const Barrio = db.Barrio;
const Ciudad = db.Ciudad;
const Corregimiento = db.Corregimiento;
const Vereda = db.Vereda;
const Municipio = db.Municipio;
const Ndap = db.Ndap;

const InmuebleController = {
async getFilteredInmueblesFull  (req, res) {
    try {
        const {
            motivo_transaccion, min_precio, max_precio, min_area_total, max_area_total,
            antiguedad, estado_inmueble, codigo_interno,
            tipo_edificacion_categoria,
            tipo_construccion, material_predominante, niveles_construidos, min_niveles_construidos, max_niveles_construidos,
            año_construccion, min_año_construccion, max_año_construccion,
            remodelado_si, fecha_ultima_remodelacion, material_piso_predominante,
            num_habitaciones, min_habitaciones, max_habitaciones,
            num_baños, min_baños, max_baños,
            tipo_cocina, balcon_si, terraza_mayor_cero, num_terrazas, garaje_mayor_cero, num_garajes,
            ascensores_si, min_closets, num_closets,
            mascotas_permitidas_si, zona_lavanderia_si, calentador_agua_si,
            uso_comercial_si, uso_residencial_si,
            parqueadero_cubierto_si, parqueadero_visitantes_si, parqueadero_descubierto_si,
            ndap_id, municipio_id, ciudad_id, corregimiento_id, vereda_id, barrio_id,
            latitud, longitud, radio_km,
            numero, calle, bloque, adicional, designador_cardinal_id,
            platform_user_id, profile_type
        } = req.query;

        const whereInmueble = { Estado: 'disponible' };
        const includeOptions = [];
        let centerLat, centerLon, radius;

        // Grupo 1
        if (motivo_transaccion) whereInmueble.Motivo_transaccion = motivo_transaccion;
        if (min_precio !== undefined || max_precio !== undefined) {
            whereInmueble.Precio = {
                ...(min_precio !== undefined && { [Op.gte]: parseFloat(min_precio) }),
                ...(max_precio !== undefined && { [Op.lte]: parseFloat(max_precio) }),
            };
        }
        if (min_area_total !== undefined || max_area_total !== undefined) {
            whereInmueble.Area_total = {
                ...(min_area_total !== undefined && { [Op.gte]: parseFloat(min_area_total) }),
                ...(max_area_total !== undefined && { [Op.lte]: parseFloat(max_area_total) }),
            };
        }
        if (antiguedad) whereInmueble.Antiguedad = antiguedad;
        if (estado_inmueble) whereInmueble.Estado = estado_inmueble;
        if (codigo_interno) whereInmueble.Codigo_interno = codigo_interno;

        // Grupo 2
        if (tipo_edificacion_categoria) {
            includeOptions.push({
                model: TipoEdificacion,
                as: 'tipoEdificacion',
                required: true,
                where: { Tipo_edificacion_categoria: tipo_edificacion_categoria },
            });
        }

        // Grupo 3
        const whereAcercaEdificacion = {};
        if (tipo_construccion) whereAcercaEdificacion.Tipo_construccion = tipo_construccion;
        if (material_predominante) whereAcercaEdificacion.Material_predominante = material_predominante;
        if (niveles_construidos !== undefined) whereAcercaEdificacion.Niveles_construidos = parseInt(niveles_construidos, 10);
        if (min_niveles_construidos !== undefined || max_niveles_construidos !== undefined) {
            whereAcercaEdificacion.Niveles_construidos = {
                ...(min_niveles_construidos !== undefined && { [Op.gte]: parseInt(min_niveles_construidos, 10) }),
                ...(max_niveles_construidos !== undefined && { [Op.lte]: parseInt(max_niveles_construidos, 10) }),
            };
        }
        if (año_construccion !== undefined) whereAcercaEdificacion.Año_construccion = parseInt(año_construccion, 10);
        if (min_año_construccion !== undefined || max_año_construccion !== undefined) {
            whereAcercaEdificacion.Año_construccion = {
                ...(min_año_construccion !== undefined && { [Op.gte]: parseInt(min_año_construccion, 10) }),
                ...(max_año_construccion !== undefined && { [Op.lte]: parseInt(max_año_construccion, 10) }),
            };
        }
        if (remodelado_si !== undefined) whereAcercaEdificacion.Remodelado_si = remodelado_si === 'true';
        if (fecha_ultima_remodelacion) whereAcercaEdificacion.Fecha_ultima_remodelacion = fecha_ultima_remodelacion;
        if (material_piso_predominante) whereAcercaEdificacion.Material_piso_predominante = material_piso_predominante;

        if (Object.keys(whereAcercaEdificacion).length > 0) {
            includeOptions.push({
                model: Acerca_edificacion,
                as: 'acercaEdificacion',
                required: true,
                where: whereAcercaEdificacion,
            });
        }

        // Grupo 4
        const whereDivision = {};
        if (num_habitaciones !== undefined) whereDivision.Numero_habitaciones = parseInt(num_habitaciones, 10);
        if (min_habitaciones !== undefined || max_habitaciones !== undefined) {
            whereDivision.Numero_habitaciones = {
                ...(min_habitaciones !== undefined && { [Op.gte]: parseInt(min_habitaciones, 10) }),
                ...(max_habitaciones !== undefined && { [Op.lte]: parseInt(max_habitaciones, 10) }),
            };
        }
        if (num_baños !== undefined) whereDivision.Numero_baños = parseInt(num_baños, 10);
        if (min_baños !== undefined || max_baños !== undefined) {
            whereDivision.Numero_baños = {
                ...(min_baños !== undefined && { [Op.gte]: parseInt(min_baños, 10) }),
                ...(max_baños !== undefined && { [Op.lte]: parseInt(max_baños, 10) }),
            };
        }
        if (tipo_cocina) whereDivision.Tipo_cocina = tipo_cocina;
        if (balcon_si !== undefined) whereDivision.Balcon_si = balcon_si === 'true';
        if (terraza_mayor_cero !== undefined) whereDivision.Numero_terrazas = { [Op.gt]: 0 };
        if (num_terrazas !== undefined) whereDivision.Numero_terrazas = parseInt(num_terrazas, 10);
        if (garaje_mayor_cero !== undefined) whereDivision.Numero_garajes = { [Op.gt]: 0 };
        if (num_garajes !== undefined) whereDivision.Numero_garajes = parseInt(num_garajes, 10);
        if (ascensores_si !== undefined) whereDivision.Ascensores_si = ascensores_si === 'true';
        if (min_closets !== undefined) whereDivision.Numero_closets = { [Op.gte]: parseInt(min_closets, 10) };
        if (num_closets !== undefined) whereDivision.Numero_closets = parseInt(num_closets, 10);

        if (Object.keys(whereDivision).length > 0) {
            includeOptions.push({
                model: Division,
                as: 'division',
                required: true,
                where: whereDivision,
            });
        }

        // Grupo 5
        const whereOtrasCaracteristicas = {};
        if (mascotas_permitidas_si !== undefined) whereOtrasCaracteristicas.Mascotas_permitidas_si = mascotas_permitidas_si === 'true';
        if (zona_lavanderia_si !== undefined) whereOtrasCaracteristicas.Zona_lavanderia_si = zona_lavanderia_si === 'true';
        if (calentador_agua_si !== undefined) whereOtrasCaracteristicas.Calentador_agua_si = calentador_agua_si === 'true';

        if (Object.keys(whereOtrasCaracteristicas).length > 0) {
            includeOptions.push({
                model: OtrasCaracteristicas,
                as: 'otrasCaracteristicas',
                required: true,
                where: whereOtrasCaracteristicas,
            });
        }

        // Grupo 6
        const whereAsignacion = {};
        if (uso_comercial_si !== undefined) whereAsignacion.Uso_comercial_si = uso_comercial_si === 'true';
        if (uso_residencial_si !== undefined) whereAsignacion.Uso_residencial_si = uso_residencial_si === 'true';

        if (Object.keys(whereAsignacion).length > 0) {
            includeOptions.push({
                model: Asignacion,
                as: 'asignacion',
                required: true,
                where: whereAsignacion,
            });
        }

        // Grupo 7
        const whereOrganizacionParqueadero = {};
        if (parqueadero_cubierto_si !== undefined) whereOrganizacionParqueadero.Parqueadero_cubierto_si = parqueadero_cubierto_si === 'true';
        if (parqueadero_visitantes_si !== undefined) whereOrganizacionParqueadero.Parqueadero_visitantes_si = parqueadero_visitantes_si === 'true';
        if (parqueadero_descubierto_si !== undefined) whereOrganizacionParqueadero.Parqueadero_descubierto_si = parqueadero_descubierto_si === 'true';

        if (Object.keys(whereOrganizacionParqueadero).length > 0) {
            includeOptions.push({
                model: OrganizacionParqueadero,
                as: 'organizacionParqueadero',
                required: true,
                where: whereOrganizacionParqueadero,
            });
        }

        // Grupo 8
        const includeDireccion = {
            model: Direccion,
            as: 'Direccion',
            required: false,
            include: []
        };
        const includeBarrioCiudadCorregimientoVereda = {
            model: BarrioCiudadCorregimientoVereda,
            as: 'BarrioCiudadCorregimientoVereda',
            required: false,
            include: []
        };
        let applyLocationFilters = false;

        if (ndap_id) {
            includeBarrioCiudadCorregimientoVereda.include.push({
                model: Ciudad, as: 'Ciudad', required: false,
                include: [{ model: Municipio, as: 'Municipio', required: true, include: [{ model: Ndap, as: 'Ndap', required: true, where: { Ndap_id: parseInt(ndap_id, 10) } }] }]
            });
            includeBarrioCiudadCorregimientoVereda.include.push({
                model: Corregimiento, as: 'Corregimiento', required: false,
                include: [{ model: Municipio, as: 'Municipio', required: true, include: [{ model: Ndap, as: 'Ndap', required: true, where: { Ndap_id: parseInt(ndap_id, 10) } }] }]
            });
            includeBarrioCiudadCorregimientoVereda.include.push({
                model: Vereda, as: 'Vereda', required: false,
                include: [{ model: Municipio, as: 'Municipio', required: true, include: [{ model: Ndap, as: 'Ndap', required: true, where: { Ndap_id: parseInt(ndap_id, 10) } }] }]
            });
            applyLocationFilters = true;
        }
        if (municipio_id) {
            includeBarrioCiudadCorregimientoVereda.include.push({
                model: Ciudad, as: 'Ciudad', required: false,
                include: [{ model: Municipio, as: 'Municipio', required: true, where: { Municipio_id: parseInt(municipio_id, 10) } }]
            });
            includeBarrioCiudadCorregimientoVereda.include.push({
                model: Corregimiento, as: 'Corregimiento', required: false,
                include: [{ model: Municipio, as: 'Municipio', required: true, where: { Municipio_id: parseInt(municipio_id, 10) } }]
            });
            includeBarrioCiudadCorregimientoVereda.include.push({
                model: Vereda, as: 'Vereda', required: false,
                include: [{ model: Municipio, as: 'Municipio', required: true, where: { Municipio_id: parseInt(municipio_id, 10) } }]
            });
            applyLocationFilters = true;
        }
        if (ciudad_id) {
            includeBarrioCiudadCorregimientoVereda.include.push({ model: Ciudad, as: 'Ciudad', required: true, where: { Ciudad_id: parseInt(ciudad_id, 10) } });
            applyLocationFilters = true;
        }
        if (corregimiento_id) {
            includeBarrioCiudadCorregimientoVereda.include.push({ model: Corregimiento, as: 'Corregimiento', required: true, where: { Corregimiento_id: parseInt(corregimiento_id, 10) } });
            applyLocationFilters = true;
        }
        if (vereda_id) {
            includeBarrioCiudadCorregimientoVereda.include.push({ model: Vereda, as: 'Vereda', required: true, where: { Vereda_id: parseInt(vereda_id, 10) } });
            applyLocationFilters = true;
        }
        if (barrio_id) {
            includeBarrioCiudadCorregimientoVereda.include.push({ model: Barrio, as: 'Barrio', required: true, where: { Barrio_id: parseInt(barrio_id, 10) } });
            applyLocationFilters = true;
        }

        if (applyLocationFilters) {
            includeDireccion.include.push(includeBarrioCiudadCorregimientoVereda);
            includeDireccion.required = true;
        }

        if (latitud && longitud && radio_km) {
            centerLat = parseFloat(latitud);
            centerLon = parseFloat(longitud);
            radius = parseFloat(radio_km);

            if (isNaN(centerLat) || isNaN(centerLon) || isNaN(radius) || radius <= 0) {
                return res.status(400).json({ message: 'Latitud, longitud y radio_km deben ser números válidos y radio_km debe ser mayor que 0.' });
            }

            includeDireccion.include.push({
                model: Localizacion,
                as: 'Localizacion',
                required: true,
                attributes: [],
            });
            includeDireccion.required = true;
            applyLocationFilters = true;
        }

        const whereDireccionDetails = {};
        let applyFullAddressFilters = false;
        if (numero) { whereDireccionDetails.Direccion_Numero = numero; applyFullAddressFilters = true; }
        if (calle) { whereDireccionDetails.Direccion_Calle = { [Op.like]: `%${calle}%` }; applyFullAddressFilters = true; }
        if (bloque) { whereDireccionDetails.Direccion_Bloque = { [Op.like]: `%${bloque}%` }; applyFullAddressFilters = true; }
        if (adicional) { whereDireccionDetails.Direccion_Adicional = { [Op.like]: `%${adicional}%` }; applyFullAddressFilters = true; }
        if (designador_cardinal_id) {
            whereDireccionDetails.Designador_cardinal_FK = parseInt(designador_cardinal_id, 10);
            includeDireccion.include.push({
                model: DesignadorCardinal,
                as: 'DesignadorCardinal',
                required: true,
            });
            applyFullAddressFilters = true;
        }

        if (applyFullAddressFilters) {
            if (Object.keys(whereDireccionDetails).length > 0) {
                includeDireccion.where = { ...includeDireccion.where, ...whereDireccionDetails };
            }
            includeDireccion.required = true;
            applyLocationFilters = true;
        }

        if (applyLocationFilters) {
            const existingDireccionIncludeIndex = includeOptions.findIndex(inc => inc.model === Direccion);
            if (existingDireccionIncludeIndex === -1) {
                includeOptions.push(includeDireccion);
            } else {
                includeOptions[existingDireccionIncludeIndex] = {
                    ...includeOptions[existingDireccionIncludeIndex],
                    ...includeDireccion,
                    include: [...(includeOptions[existingDireccionIncludeIndex].include || []), ...includeDireccion.include]
                };
            }
        }

        // Grupo 9
        let applyPublicadorFilters = false;
        const publicadorInclude = {
            model: PlatformUser,
            as: 'publicador',
            required: false,
            include: []
        };

        if (platform_user_id) {
            publicadorInclude.where = { Platform_user_id: parseInt(platform_user_id, 10) };
            publicadorInclude.required = true;
            applyPublicadorFilters = true;
        }

        if (profile_type) {
            publicadorInclude.include.push({
                model: PlatformProfile,
                as: 'perfilPublicador',
                required: true,
                where: { Profile_type: profile_type }
            });
            publicadorInclude.required = true;
            applyPublicadorFilters = true;
        }

        if (applyPublicadorFilters) {
            includeOptions.push(publicadorInclude);
        }

        // Consulta final
        const findOptions = {
            where: whereInmueble,
            include: includeOptions,
        };

        if (latitud && longitud && radio_km) {
            findOptions.attributes = {
                include: [
                    [
                        sequelize.literal(`
                            6371 * acos(
                                cos(radians(${centerLat})) * cos(radians("Direccion->Localizacion"."Latitud")) *
                                cos(radians("Direccion->Localizacion"."Longitud") - radians(${centerLon})) +
                                sin(radians(${centerLat})) * sin(radians("Direccion->Localizacion"."Latitud"))
                            )
                        `),
                        'distancia_km'
                    ]
                ]
            };
            findOptions.having = sequelize.literal(`distancia_km <= ${radius}`);
            findOptions.order = [[sequelize.literal('distancia_km'), 'ASC']];
        }

        const inmuebles = await Inmueble.findAll(findOptions);

        if (inmuebles.length === 0) {
            return res.status(404).json({ message: 'No se encontraron inmuebles con los criterios de búsqueda especificados.' });
        }

        res.status(200).json(inmuebles);

    } catch (error) {
        console.error('Error al obtener inmuebles con filtros completos:', error);
        res.status(500).json({ message: 'Error interno del servidor al obtener inmuebles con filtros completos.', error: error.message });
    }
}
};

module.exports = InmuebleController;