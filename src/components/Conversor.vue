<template>
    <div>
        <h2 class="text-center fw-bold mb-4">Conversor a Dólares</h2>
        <div class="mb-3">
            <label for="pesos" class="form-label">Ingrese el monto</label>
            <input type="number" id="pesos" class="form-control" v-model="pesos" placeholder="Ingrese el valor en pesos"
                :class="{ 'is-invalid': pesos < 0 }" :style="{ borderColor: pesos < 0 ? 'red' : '' }" />
            <div v-if="pesos < 0" class="text-danger">
                El valor en pesos no puede ser negativo.
            </div>
        </div>


        <div class="mb-3">
            <label for="cotizacion" class="form-label">Cotización del Dólar</label>
            <input type="number" id="cotizacion" class="form-control" v-model="cotizacionDolar"
                :readonly="actualizacionAutomatica" placeholder="Cotización del dólar"
                :class="{ 'is-invalid': cotizacionDolar <= 0 }"
                :style="{ borderColor: cotizacionDolar <= 0 ? 'red' : '' }" />
            <div v-if="cotizacionDolar <= 0" class="text-danger">
                La cotización debe ser mayor a 0.
            </div>
        </div>

        <div class="form-check mb-3">
            <input type="checkbox" id="actualizacion" class="form-check-input" v-model="actualizacionAutomatica" />
            <label for="actualizacion" class="form-check-label"
                :class="{ 'text-primary': actualizacionAutomatica, 'text-secondary': !actualizacionAutomatica }">
                Habilitar actualización automática
            </label>
        </div>

        <div v-if="actualizacionAutomatica" class="mt-3">
            <p class="text-muted">
                Última actualización: {{ ultimaActualizacion }}
            </p>
        </div>

        <div class="mt-3">
            <p class="result" :class="{ 'text-success': resultado > 0, 'text-danger': resultado <= 0 }">
                Valor convertido    : {{ resultado }} USD
            </p>
        </div>
    </div>
    
</template>

<script>
import { obtenerCotizacionDolar } from "../servicios/apiService.js";

export default {
    name: "Conversor",
    data() {
        return {
            pesos: 0,
            cotizacionDolar: 0,
            actualizacionAutomatica: false,
            ultimaActualizacion: "",
            intervalo: null,
        };
    },
    computed: {
        resultado() {
            if (this.cotizacionDolar > 0) {
                return (this.pesos / this.cotizacionDolar).toFixed(2);
            }
            return 0;
        },
    },
    methods: {

        async actualizarCotizacion() {
            try {
                this.cotizacionDolar = await obtenerCotizacionDolar();
                const fecha = new Date();
                this.ultimaActualizacion = fecha.toLocaleString();
            } catch (error) {
                console.error("Error al actualizar la cotización:", error.message);
            }
        },
    },
    watch: {

        actualizacionAutomatica(nuevoValor) {
            if (nuevoValor) {
                this.actualizarCotizacion();
                this.intervalo = setInterval(this.actualizarCotizacion, 2000); // Actualizar cada 2 segundos
            } else {
                clearInterval(this.intervalo);
                this.intervalo = null;
            }
        },
    },
    beforeUnmount() {
        // Limpiar el intervalo al desmontar el componente
        if (this.intervalo) {
            clearInterval(this.intervalo);
        }
    },
};
</script>

<style>
.result {
    font-size: 1.5em;
    color: #333;
}
</style>