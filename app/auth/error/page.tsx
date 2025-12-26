export default function AuthError() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)]">
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-12 max-w-2xl w-full border border-red-500/20">
        <h1 className="text-4xl font-bold text-white mb-6 text-center">
          Zugriff verweigert
        </h1>
        <p className="text-xl text-white/80 text-center mb-8">
          Sie sind nicht berechtigt, sich anzumelden. Bitte verwenden Sie das autorisierte Google-Konto.
        </p>
        <div className="flex justify-center">
          <a
            href="/"
            className="bg-secondary hover:bg-secondary-600 text-primary-900 font-bold py-3 px-8 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Zurück zur Startseite
          </a>
        </div>
      </div>
    </div>
  );
}
