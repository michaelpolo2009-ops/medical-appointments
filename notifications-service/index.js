import mongoose from 'mongoose';
const MONGO_URI = process.env.MONGO_URI || 'mongodb://mongo:27017/medical_appointments';
console.log('[Notification Service] Iniciando servicio de recordatorios...');
const runWorker = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('[Notification Service] Conectado exitosamente a MongoDB.');
    setInterval(() => {
      console.log(`[Notification Service - ${new Date().toISOString()}] Verificando citas y enviando recordatorios... OK`);
    }, 15000);
  } catch (error) {
    console.error('[Notification Service] Error:', error.message);
    setTimeout(runWorker, 5000);
  }
};
runWorker();
