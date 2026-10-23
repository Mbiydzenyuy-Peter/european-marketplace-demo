(() => {
  const API_BASE = (document.querySelector('meta[name="marketplace-api-base"]')?.content || 'http://127.0.0.1:8000/api').trim().replace(/\/+$/, '');
  const BRAND_NAME = (document.querySelector('meta[name="marketplace-brand"]')?.content || 'Marketplace').trim();
  const LOCAL_API = /^(https?:\/\/)?(127\.0\.0\.1|localhost)(:\d+)?(\/|$)/i.test(API_BASE);
  const words = {
    de: {
      discover: 'Entdecken', categories: 'Kategorien', search: 'Suche', account: 'Konto', cart: 'Warenkorb', wishlist: 'Merkliste', wishlistEmpty: 'In den aktuellen Angeboten sind keine gemerkten Artikel.', featured: 'Ausgewählte Highlights', viewAll: 'Alle Angebote ansehen', favorite: 'Auf die Merkliste', unfavorite: 'Von der Merkliste entfernen', orders: 'Bestellungen', seller: 'Verkaufen', admin: 'Administration', language: 'Sprache', theme: 'Darstellung', light: 'Hell', dark: 'Dunkel',
      heroKicker: 'Mode, die ihren eigenen Weg geht', heroTitle: 'Ein neuer Blick auf Stil.', heroText: 'Entdecke aktuelle Mode, besondere Stücke und Services unabhängiger Anbieter – zum Start für den deutschen Markt.', browse: 'Angebote entdecken', exploreServices: 'Services entdecken', heroImageAlt: 'Editoriales Fashion-Porträt mit Sonnenbrille und Umhängetasche', imageCredit: 'Foto von', fashionCategories: 'Stilwelten entdecken', categoryBags: 'Taschen', categoryShoes: 'Schuhe', categoryDresses: 'Kleider', categoryEyewear: 'Brillen', categoryWatches: 'Uhren', categoryOutfits: 'Outfits', categoryBeauty: 'Beauty', categoryHome: 'Wohnen', latest: 'Aktuelle Angebote', all: 'Alle Kategorien', category: 'Kategorie', type: 'Angebotstyp', allTypes: 'Alle Typen',       product: 'Produkt', service: 'Dienstleistung', stock: 'Bestand', searchPlaceholder: 'Angebote suchen', view: 'Details ansehen', noListings: 'Zurzeit sind keine Angebote verfügbar.', noCategories: 'Kategorien sind derzeit nicht verfügbar.', loading: 'Wird geladen …', retry: 'Erneut versuchen', error: 'Die Anfrage ist fehlgeschlagen.', apiLocal: 'Lokale Entwicklungsadresse: 127.0.0.1:8000. Für Netlify oder andere Deployments muss marketplace-api-base in index.html auf eine erreichbare HTTPS-API zeigen; localhost bezeichnet sonst das Gerät der Besuchenden.',
      login: 'Anmelden', register: 'Konto erstellen', name: 'Name', email: 'E-Mail-Adresse', password: 'Passwort', confirm: 'Passwort bestätigen', signIn: 'Anmelden', createAccount: 'Konto erstellen', logout: 'Abmelden', signedIn: 'Angemeldet als', accountNote: 'Melde dich mit deinem Marketplace-Konto an.', loginRequired: 'Bitte melde dich an, um fortzufahren.', loginError: 'Anmeldung nicht möglich. Bitte überprüfe deine Angaben.', registerError: 'Registrierung nicht möglich. Bitte überprüfe deine Angaben.', profile: 'Profil', save: 'Speichern', saved: 'Änderungen gespeichert.', profileError: 'Profil konnte nicht aktualisiert werden.',
      validationError: 'Bitte überprüfe deine Eingaben.', forbidden: 'Du bist nicht berechtigt, diese Aktion auszuführen.', notFound: 'Der angeforderte Eintrag wurde nicht gefunden.', conflict: 'Diese Aktion kann derzeit nicht abgeschlossen werden.', rateLimited: 'Zu viele Anfragen. Bitte warte kurz und versuche es erneut.',
      addCart: 'In den Warenkorb', sellerLabel: 'Anbieter', unavailable: 'Nicht verfügbar', cartEmpty: 'Dein Warenkorb ist leer.', quantity: 'Menge', remove: 'Entfernen', subtotal: 'Zwischensumme', checkout: 'Unbezahlte Bestellanfrage senden', checkoutNote: 'Die Anfrage bleibt unbezahlt und reserviert keinen Bestand. Eine Bestätigung und Live-Zahlung sind erst nach Integration eines Zahlungsanbieters möglich.', orderPlaced: 'Unbezahlte Anfrage gespeichert; Bestand wurde nicht reserviert.', orderHistory: 'Bestellverlauf', paymentPending: 'Unbezahlt', orderPending: 'Ausstehend', noOrders: 'Du hast noch keine Bestellungen.', status: 'Status', total: 'Gesamt', date: 'Datum', status_pending: 'Ausstehend', status_processing: 'In Bearbeitung', status_shipped: 'Versandt', status_delivered: 'Zugestellt', status_cancelled: 'Storniert', status_payment_pending: 'Unbezahlt', status_payment_paid: 'Bezahlt',
      sellerTitle: 'Verkäuferbereich', onboarding: 'Verkäuferkonto einrichten', storeName: 'Shopname', description: 'Beschreibung', onboard: 'Onboarding absenden', onboardingNote: 'Die Freischaltung und Berechtigungen werden serverseitig geprüft.', listings: 'Meine Angebote', addListing: 'Angebot erstellen', title: 'Titel', price: 'Preis', currency: 'Währung', stock: 'Bestand', saveListing: 'Angebot speichern', edit: 'Bearbeiten', delete: 'Löschen', uploadImages: 'Bilder hochladen', sellerOrders: 'Verkäuferbestellungen', noSellerListings: 'Noch keine Angebote.', noSellerOrders: 'Noch keine Verkäuferbestellungen.', typeLabel: 'Typ', selectCategory: 'Kategorie wählen', created: 'Angebot erstellt.', updated: 'Angebot aktualisiert.', deleted: 'Angebot gelöscht.', imageUploaded: 'Bilder hochgeladen.', onboarded: 'Anfrage gesendet.', updateOrder: 'Bestellposition aktualisieren',
      adminTitle: 'Administration', dashboard: 'Übersicht', pendingListings: 'Angebote zur Prüfung', pendingSellers: 'Verkäuferanfragen', sellerApplication: 'Verkäuferanfrage', noPendingSellers: 'Keine Verkäuferanfragen zur Prüfung.', approve: 'Freigeben', reject: 'Ablehnen', noPending: 'Keine Angebote zur Prüfung.', reviewError: 'Prüfung fehlgeschlagen.', serverAuth: 'Diese Werkzeuge werden nur für erkannte Staff-/Admin-Rollen angezeigt. Der Server muss jede Berechtigung selbst prüfen.', noAdmin: 'Für diese Ansicht ist eine Staff- oder Admin-Rolle erforderlich.',
      apiError: 'API nicht erreichbar oder Anfrage fehlgeschlagen.', close: 'Schließen', back: 'Zurück', empty: 'Keine Daten vorhanden.', requestFailed: 'Die Anfrage konnte nicht abgeschlossen werden.'
    },
    en: {
      discover: 'Discover', categories: 'Categories', search: 'Search', account: 'Account', cart: 'Cart', wishlist: 'Wishlist', wishlistEmpty: 'No saved items in the current listings.', featured: 'Featured Luxury Picks', viewAll: 'View all listings', favorite: 'Add to wishlist', unfavorite: 'Remove from wishlist', orders: 'Orders', seller: 'Sell', admin: 'Administration', language: 'Language', theme: 'Appearance', light: 'Light', dark: 'Dark',
      heroKicker: 'Fashion with a point of view', heroTitle: 'A fresh perspective on style.', heroText: 'Discover current fashion, distinctive pieces and services from independent sellers — launching for the German market.', browse: 'Explore listings', exploreServices: 'Explore services', heroImageAlt: 'Editorial fashion portrait with sunglasses and a handbag', imageCredit: 'Photography via', fashionCategories: 'Explore the edit', categoryBags: 'Bags', categoryShoes: 'Shoes', categoryDresses: 'Dresses', categoryEyewear: 'Eyewear', categoryWatches: 'Watches', categoryOutfits: 'Outfits', categoryBeauty: 'Beauty', categoryHome: 'Home & Living', latest: 'Current listings', all: 'All categories', category: 'Category', type: 'Listing type', allTypes: 'All types',       product: 'Product', service: 'Service', stock: 'Stock', searchPlaceholder: 'Search listings', view: 'View details', noListings: 'There are no listings available right now.', noCategories: 'Categories are currently unavailable.', loading: 'Loading …', retry: 'Try again', error: 'The request failed.', apiLocal: 'Local development default: 127.0.0.1:8000. For Netlify or another deployment, set marketplace-api-base in index.html to a reachable HTTPS API; otherwise localhost refers to each visitor’s own device.',
      login: 'Sign in', register: 'Create account', name: 'Name', email: 'Email address', password: 'Password', confirm: 'Confirm password', signIn: 'Sign in', createAccount: 'Create account', logout: 'Sign out', signedIn: 'Signed in as', accountNote: 'Sign in with your marketplace account.', loginRequired: 'Please sign in to continue.', loginError: 'Sign-in failed. Check your details and try again.', registerError: 'Registration failed. Check your details and try again.', profile: 'Profile', save: 'Save', saved: 'Changes saved.', profileError: 'Could not update the profile.',
      validationError: 'Please check the information you entered.', forbidden: 'You are not allowed to perform this action.', notFound: 'The requested item could not be found.', conflict: 'This action cannot be completed right now.', rateLimited: 'Too many requests. Please wait and try again.',
      addCart: 'Add to cart', sellerLabel: 'Seller', unavailable: 'Unavailable', cartEmpty: 'Your cart is empty.', quantity: 'Quantity', remove: 'Remove', subtotal: 'Subtotal', checkout: 'Send unpaid order request', checkoutNote: 'This request remains unpaid and does not reserve inventory. Confirmation and live payment require a payment provider integration.', orderPlaced: 'Unpaid request recorded; inventory was not reserved.', orderHistory: 'Order history', paymentPending: 'Unpaid', orderPending: 'Pending', noOrders: 'You have no orders yet.', status: 'Status', total: 'Total', date: 'Date', status_pending: 'Pending', status_processing: 'Processing', status_shipped: 'Shipped', status_delivered: 'Delivered', status_cancelled: 'Cancelled', status_payment_pending: 'Unpaid', status_payment_paid: 'Paid',
      sellerTitle: 'Seller workspace', onboarding: 'Set up seller account', storeName: 'Store name', description: 'Description', onboard: 'Submit onboarding', onboardingNote: 'Approval and permissions are enforced by the server.', listings: 'My listings', addListing: 'Create listing', title: 'Title', price: 'Price', currency: 'Currency', stock: 'Stock', saveListing: 'Save listing', edit: 'Edit', delete: 'Delete', uploadImages: 'Upload images', sellerOrders: 'Seller orders', noSellerListings: 'No listings yet.', noSellerOrders: 'No seller orders yet.', typeLabel: 'Type', selectCategory: 'Choose a category', created: 'Listing created.', updated: 'Listing updated.', deleted: 'Listing deleted.', imageUploaded: 'Images uploaded.', onboarded: 'Request submitted.', updateOrder: 'Update order item',
      adminTitle: 'Administration', dashboard: 'Dashboard', pendingListings: 'Listings pending review', pendingSellers: 'Seller applications', sellerApplication: 'Seller application', noPendingSellers: 'No seller applications pending review.', approve: 'Approve', reject: 'Reject', noPending: 'No listings pending review.', reviewError: 'Review failed.', serverAuth: 'These tools appear only for recognized staff/admin roles. The server must enforce every permission.', noAdmin: 'A staff or admin role is required to view this page.',
      apiError: 'The API is unavailable or the request failed.', close: 'Close', back: 'Back', empty: 'No data available.', requestFailed: 'The request could not be completed.'
    },
    fr: {
      discover: 'Découvrir', categories: 'Catégories', search: 'Recherche', account: 'Compte', cart: 'Panier', wishlist: 'Favoris', wishlistEmpty: 'Aucun article enregistré parmi les offres actuelles.', featured: 'Sélection de prestige', viewAll: 'Voir toutes les offres', favorite: 'Ajouter aux favoris', unfavorite: 'Retirer des favoris', orders: 'Commandes', seller: 'Vendre', admin: 'Administration', language: 'Langue', theme: 'Affichage', light: 'Clair', dark: 'Sombre',
      heroKicker: 'La mode, avec un regard singulier', heroTitle: 'Un nouveau regard sur le style.', heroText: 'Découvrez la mode actuelle, des pièces singulières et des services de vendeurs indépendants — lancement sur le marché allemand.', browse: 'Découvrir les offres', exploreServices: 'Découvrir les services', heroImageAlt: 'Portrait éditorial de mode avec lunettes et sac bandoulière', imageCredit: 'Photo via', fashionCategories: 'Explorer les univers', categoryBags: 'Sacs', categoryShoes: 'Chaussures', categoryDresses: 'Robes', categoryEyewear: 'Lunettes', categoryWatches: 'Montres', categoryOutfits: 'Tenues', categoryBeauty: 'Beauté', categoryHome: 'Maison', latest: 'Offres actuelles', all: 'Toutes les catégories', category: 'Catégorie', type: 'Type d’offre', allTypes: 'Tous les types',       product: 'Produit', service: 'Service', stock: 'Stock', searchPlaceholder: 'Rechercher des offres', view: 'Voir les détails', noListings: 'Aucune offre disponible pour le moment.', noCategories: 'Les catégories sont indisponibles pour le moment.', loading: 'Chargement …', retry: 'Réessayer', error: 'La requête a échoué.', apiLocal: 'Adresse de développement locale : 127.0.0.1:8000. Pour Netlify ou tout autre déploiement, marketplace-api-base dans index.html doit indiquer une API HTTPS accessible ; localhost désigne sinon l’appareil de chaque visiteur.',
      login: 'Se connecter', register: 'Créer un compte', name: 'Nom', email: 'Adresse e-mail', password: 'Mot de passe', confirm: 'Confirmer le mot de passe', signIn: 'Se connecter', createAccount: 'Créer un compte', logout: 'Se déconnecter', signedIn: 'Connecté en tant que', accountNote: 'Connectez-vous avec votre compte marketplace.', loginRequired: 'Veuillez vous connecter pour continuer.', loginError: 'Connexion impossible. Vérifiez vos informations.', registerError: 'Inscription impossible. Vérifiez vos informations.', profile: 'Profil', save: 'Enregistrer', saved: 'Modifications enregistrées.', profileError: 'Impossible de modifier le profil.',
      validationError: 'Veuillez vérifier les informations saisies.', forbidden: 'Vous n’êtes pas autorisé à effectuer cette action.', notFound: 'L’élément demandé est introuvable.', conflict: 'Cette action ne peut pas être effectuée pour le moment.', rateLimited: 'Trop de requêtes. Veuillez patienter puis réessayer.',
      addCart: 'Ajouter au panier', sellerLabel: 'Vendeur', unavailable: 'Indisponible', cartEmpty: 'Votre panier est vide.', quantity: 'Quantité', remove: 'Supprimer', subtotal: 'Sous-total', checkout: 'Envoyer une demande impayée', checkoutNote: 'Cette demande reste impayée et ne réserve pas le stock. La confirmation et le paiement en direct nécessitent l’intégration d’un prestataire.', orderPlaced: 'Demande impayée enregistrée ; le stock n’a pas été réservé.', orderHistory: 'Historique des commandes', paymentPending: 'Impayée', orderPending: 'En attente', noOrders: 'Vous n’avez pas encore de commande.', status: 'Statut', total: 'Total', date: 'Date', status_pending: 'En attente', status_processing: 'En cours', status_shipped: 'Expédiée', status_delivered: 'Livrée', status_cancelled: 'Annulée', status_payment_pending: 'Impayée', status_payment_paid: 'Payée',
      sellerTitle: 'Espace vendeur', onboarding: 'Créer un compte vendeur', storeName: 'Nom de la boutique', description: 'Description', onboard: 'Envoyer la demande', onboardingNote: 'L’approbation et les autorisations sont contrôlées par le serveur.', listings: 'Mes offres', addListing: 'Créer une offre', title: 'Titre', price: 'Prix', currency: 'Devise', stock: 'Stock', saveListing: 'Enregistrer l’offre', edit: 'Modifier', delete: 'Supprimer', uploadImages: 'Téléverser des images', sellerOrders: 'Commandes vendeur', noSellerListings: 'Aucune offre pour le moment.', noSellerOrders: 'Aucune commande vendeur.', typeLabel: 'Type', selectCategory: 'Choisir une catégorie', created: 'Offre créée.', updated: 'Offre modifiée.', deleted: 'Offre supprimée.', imageUploaded: 'Images téléversées.', onboarded: 'Demande envoyée.', updateOrder: 'Modifier l’article commandé',
      adminTitle: 'Administration', dashboard: 'Tableau de bord', pendingListings: 'Offres à examiner', pendingSellers: 'Demandes vendeur', sellerApplication: 'Demande vendeur', noPendingSellers: 'Aucune demande vendeur à examiner.', approve: 'Approuver', reject: 'Refuser', noPending: 'Aucune offre à examiner.', reviewError: 'Échec de la vérification.', serverAuth: 'Ces outils ne sont visibles que pour les rôles staff/admin reconnus. Le serveur doit vérifier chaque autorisation.', noAdmin: 'Un rôle staff ou admin est requis pour consulter cette page.',
      apiError: 'API indisponible ou requête échouée.', close: 'Fermer', back: 'Retour', empty: 'Aucune donnée disponible.', requestFailed: 'La requête n’a pas abouti.'
    }
  };
  const storedWishlist = (() => {
    try {
      const value = JSON.parse(localStorage.getItem('mp-wishlist') || '[]');
      return Array.isArray(value) ? value.map(String) : [];
    } catch {
      return [];
    }
  })();
  const storedToken = (() => {
    try { return sessionStorage.getItem('mp-token') || null; } catch { return null; }
  })();
  const state = {
    lang: localStorage.getItem('mp-lang') || 'de',
    theme: localStorage.getItem('mp-theme') || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'),
    token: storedToken, user: null, page: 'store', categories: [], listings: [], listing: null, cart: null, orderNotice: '',
    orders: [], sellerListings: [], sellerOrders: [], adminDashboard: null, pendingListings: [], pendingSellers: [],
    category: '', type: '', query: '', loading: false, error: '', authMode: 'login', listingEdit: null,
    heroSlide: 0, heroPaused: false, wishlist: storedWishlist, wishlistOnly: false
  };
  const t = (key) => (words[state.lang] || words.de)[key] || key;
  const heroLabels = {
    de: { previous: 'Vorherige Folie', next: 'Nächste Folie', slide: 'Folie', pause: 'Slideshow pausieren', resume: 'Slideshow fortsetzen', credit: 'Bildmaterial via', controls: 'Slideshow-Steuerung' },
    en: { previous: 'Previous slide', next: 'Next slide', slide: 'Slide', pause: 'Pause slideshow', resume: 'Resume slideshow', credit: 'Images via', controls: 'Slideshow controls' },
    fr: { previous: 'Diapositive précédente', next: 'Diapositive suivante', slide: 'Diapositive', pause: 'Mettre le diaporama en pause', resume: 'Reprendre le diaporama', credit: 'Images via', controls: 'Commandes du diaporama' }
  };
  const heroText = (key) => (heroLabels[state.lang] || heroLabels.de)[key];
  const heroSlides = [
    { id: '1539109136881-3be0616acf4b', position: 'center 38%' },
    { id: '1524504388940-b1c1722653e1', position: 'center 36%' },
    { id: '1515886657613-9f3515b0c78f', position: 'center 34%' },
    { id: '1483985988355-763728e1935b', position: 'center 38%' },
    { id: '1502602898657-3e91760cbb34', position: 'center 45%' },
  ];
  const heroImageUrl = (slide) => `https://images.unsplash.com/photo-${slide.id}?auto=format&fit=crop&w=2000&q=82`;
  const categoryImageIds = ['1584917865442-de89df76afd3', '1543163521-1bf539c55dd2', '1595777457583-95e059d581b8', '1511499767150-a48a237f0083', '1524592094714-0f0654e20314', '1539109136881-3be0616acf4b', '1596462502278-27bfdc403348', '1616486338812-3dadae4b4ace'];
  const categoryImageUrl = (id) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=700&q=78`;
  const displayStatus = (value) => {
    const key = `status_${String(value || 'pending').toLowerCase()}`;
    return t(key) === key ? String(value || '') : t(key);
  };
  const esc = (value) => String(value ?? '').replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);
  const api = async (path, options = {}) => {
    const headers = { Accept: 'application/json', ...(options.headers || {}) };
    if (state.token) headers.Authorization = `Bearer ${state.token}`;
    let body = options.body;
    if (body && !(body instanceof FormData)) {
      headers['Content-Type'] = 'application/json';
      body = JSON.stringify(body);
    }
    let response;
    try {
      response = await fetch(`${API_BASE}${path}`, { method: options.method || 'GET', headers, ...(body !== undefined ? { body } : {}) });
    } catch (error) {
      throw new Error(t('apiError'));
    }
    const envelope = await response.json().catch(() => null);
    if (response.status === 401 && state.token) {
      state.token = null;
      state.user = null;
      try { sessionStorage.removeItem('mp-token'); } catch {}
    }
    const serverFailure = response.status >= 500 || envelope?.message === 'Server Error'
      || !response.headers.get('content-type')?.toLowerCase().includes('application/json');
    if (!response.ok || !envelope || envelope.success !== true) {
      const status = serverFailure ? 500 : response.status;
      const messageKey = status === 401 ? 'loginRequired'
        : status === 403 ? 'forbidden'
          : status === 404 ? 'notFound'
            : status === 409 ? 'conflict'
              : status === 422 ? 'validationError'
                : status === 429 ? 'rateLimited'
                  : serverFailure ? 'apiError' : 'requestFailed';
      const error = new Error(t(messageKey));
      error.status = status;
      throw error;
    }
    return envelope?.data ?? envelope;
  };
  const roleNames = () => {
    const roles = [state.user?.role, state.user?.role?.name, state.user?.role?.slug, state.user?.account_type, state.user?.type, ...(Array.isArray(state.user?.roles) ? state.user.roles.map((role) => typeof role === 'string' ? role : role?.name || role?.slug) : [])];
    return roles.filter(Boolean).map((role) => String(role).toLowerCase());
  };
  const isSeller = () => roleNames().includes('seller');
  const isAdmin = () => roleNames().some((role) => ['admin', 'staff'].includes(role));
  const money = (amount, currency = 'EUR') => {
    const locale = state.lang === 'de' ? 'de-DE' : state.lang === 'fr' ? 'fr-FR' : 'en-GB';
    const value = Number(amount);
    if (!Number.isFinite(value)) return '—';
    try { return new Intl.NumberFormat(locale, { style: 'currency', currency: currency || 'EUR' }).format(value); } catch { return `${value.toFixed(2)} ${currency || ''}`; }
  };
  const imageUrl = (value) => {
    try {
      const url = new URL(String(value), `${API_BASE}/`);
      return ['http:', 'https:'].includes(url.protocol) ? url.href : '';
    } catch { return ''; }
  };
  const notify = (message, error = false) => {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.toggle('toast-error', error);
    if (window.bootstrap?.Toast) bootstrap.Toast.getOrCreateInstance(toast, { delay: 3200 }).show();
    else { toast.classList.add('show'); setTimeout(() => toast.classList.remove('show'), 3200); }
  };
  const alertBox = (message, danger = false) => `<div class="alert ${danger ? 'alert-danger' : 'alert-info'}" role="${danger ? 'alert' : 'status'}">${esc(message)}</div>`;
  const actionButton = (label, action, extra = '') => `<button class="button-dark btn btn-primary" type="button" data-action="${action}" ${extra}>${esc(label)}</button>`;
  const roleLinks = () => `${state.token ? `<button class="nav-link" data-page="seller">${t('seller')}</button>` : ''}${isAdmin() ? `<button class="nav-link" data-page="admin">${t('admin')}</button>` : ''}`;

  function shell() {
    document.documentElement.lang = state.lang;
    document.documentElement.dataset.theme = state.theme;
    document.documentElement.dataset.bsTheme = state.theme;
    document.title = BRAND_NAME;
    const notice = LOCAL_API ? `<div class="api-notice">${esc(t('apiLocal'))}</div>` : '';
    document.getElementById('app').innerHTML = `
      ${notice}
      <header class="market-header">
        <a class="market-mark" href="#" data-page="store" aria-label="${esc(BRAND_NAME)}"><span class="brand-crest" aria-hidden="true">${esc(BRAND_NAME.slice(0, 1).toUpperCase())}</span><span>${esc(BRAND_NAME)}</span></a>
        <nav class="market-nav" aria-label="${esc(t('discover'))}">
          <button class="nav-link ${state.page === 'store' ? 'active' : ''}" data-page="store">${esc(t('discover'))}</button>
          <button class="nav-link" data-scroll="fashion-categories">${esc(t('categories'))}</button>
          ${roleLinks()}
          ${state.token ? `<button class="nav-link" data-page="orders">${esc(t('orders'))}</button>` : ''}
        </nav>
        <form class="header-search" data-form="search"><input aria-label="${esc(t('search'))}" name="q" placeholder="${esc(t('searchPlaceholder'))}" value="${esc(state.query)}"><button aria-label="${esc(t('search'))}" type="submit"><i class="fa-solid fa-magnifying-glass"></i></button></form>
        <div class="market-actions">
          <button class="icon-button wishlist-button" data-open-wishlist aria-label="${esc(t('wishlist'))}" title="${esc(t('wishlist'))}"><i class="fa-regular fa-heart" aria-hidden="true"></i>${state.wishlist.length ? `<span class="wishlist-count">${state.wishlist.length}</span>` : ''}</button>
          <select class="language-select" aria-label="${esc(t('language'))}" data-setting="lang"><option value="de" ${state.lang === 'de' ? 'selected' : ''}>DE</option><option value="en" ${state.lang === 'en' ? 'selected' : ''}>EN</option><option value="fr" ${state.lang === 'fr' ? 'selected' : ''}>FR</option></select>
          <button class="icon-button" data-setting="theme" aria-label="${esc(t('theme'))}"><i class="fa-regular fa-moon"></i></button>
          <button class="icon-button header-cart" data-page="cart" aria-label="${esc(t('cart'))}" title="${esc(t('cart'))}"><i class="fa-solid fa-bag-shopping"></i>${state.cart?.items?.length ? `<span class="wishlist-count">${state.cart.items.reduce((count, item) => count + (Number(item.quantity) || 0), 0)}</span>` : ''}</button>
          <button class="account-button" data-page="${state.token ? 'account' : 'login'}"><i class="fa-regular fa-user" aria-hidden="true"></i><span>${esc(state.token ? (state.user?.name || t('account')) : t('account'))}</span></button>
        </div>
      </header>
      <main id="main-content">${renderPage()}</main>
      <footer class="market-footer"><span>${esc(BRAND_NAME)}</span><span>${esc(t('apiLocal') && LOCAL_API ? 'API: local development default' : 'API configured')}</span><span>© ${new Date().getFullYear()}</span></footer>`;
    initializeHeroCarousel();
  }

  let heroTimer;
  let heroTransitionTimer;
  const heroPauseReasons = new Set();
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  function stopHeroTimer() {
    clearTimeout(heroTimer);
    heroTimer = null;
  }
  function scheduleHeroSlide() {
    stopHeroTimer();
    if (state.page !== 'store' || state.heroPaused || heroPauseReasons.size || reducedMotion.matches || !document.querySelector('.market-hero')) return;
    heroTimer = setTimeout(() => changeHeroSlide(state.heroSlide + 1), 1800);
  }
  function setHeroPauseReason(reason, paused) {
    if (paused) heroPauseReasons.add(reason);
    else heroPauseReasons.delete(reason);
    if (heroPauseReasons.size || state.heroPaused) stopHeroTimer();
    else scheduleHeroSlide();
  }
  function changeHeroSlide(index) {
    const hero = document.querySelector('.market-hero');
    if (!hero || state.page !== 'store' || hero.dataset.transitioning === 'true') return;
    const nextIndex = (index + heroSlides.length) % heroSlides.length;
    if (nextIndex === state.heroSlide) { scheduleHeroSlide(); return; }
    stopHeroTimer();
    hero.dataset.transitioning = 'true';
    state.heroSlide = nextIndex;
    hero.querySelectorAll('.hero-slide').forEach((slide, slideIndex) => {
      slide.classList.toggle('is-active', slideIndex === nextIndex);
      slide.setAttribute('aria-hidden', String(slideIndex !== nextIndex));
    });
    hero.querySelectorAll('.hero-dot').forEach((dot, dotIndex) => {
      if (dotIndex === nextIndex) dot.setAttribute('aria-current', 'true');
      else dot.removeAttribute('aria-current');
    });
    const counter = hero.querySelector('.hero-counter-current');
    if (counter) counter.textContent = String(nextIndex + 1).padStart(2, '0');
    heroTransitionTimer = setTimeout(() => {
      hero.dataset.transitioning = 'false';
    }, reducedMotion.matches ? 0 : 760);
    scheduleHeroSlide();
  }
  function initializeHeroCarousel() {
    stopHeroTimer();
    clearTimeout(heroTransitionTimer);
    const hero = document.querySelector('.market-hero');
    if (!hero) return;
    hero.dataset.transitioning = 'false';
    hero.querySelectorAll('.hero-slide').forEach((slide, index) => {
      slide.classList.toggle('is-active', index === state.heroSlide);
      slide.setAttribute('aria-hidden', String(index !== state.heroSlide));
    });
    hero.querySelectorAll('.hero-dot').forEach((dot, index) => {
      if (index === state.heroSlide) dot.setAttribute('aria-current', 'true');
      else dot.removeAttribute('aria-current');
    });
    const toggle = hero.querySelector('[data-hero-toggle]');
    if (toggle) {
      toggle.setAttribute('aria-label', heroText(state.heroPaused ? 'resume' : 'pause'));
      toggle.setAttribute('aria-pressed', String(state.heroPaused));
    }
    scheduleHeroSlide();
  }

  function image(listing, cls = '') {
    const src = Array.isArray(listing.images) ? listing.images.map(imageUrl).find(Boolean) : '';
    if (!src) return `<div class="listing-image listing-image-empty ${cls}" aria-label="${esc(listing.title)}"></div>`;
    return `<img class="listing-image ${cls}" src="${esc(src)}" alt="${esc(listing.title || '')}" loading="lazy" onerror="this.hidden=true">`;
  }
  function listingCard(listing) {
    const cat = listing.category?.name || '';
    const favorite = state.wishlist.includes(String(listing.id));
    return `<article class="listing-card">
      <button class="listing-wishlist ${favorite ? 'is-saved' : ''}" type="button" data-wishlist="${esc(listing.id)}" aria-label="${esc(t(favorite ? 'unfavorite' : 'favorite'))}" aria-pressed="${favorite}"><i class="${favorite ? 'fa-solid' : 'fa-regular'} fa-heart" aria-hidden="true"></i></button>
      <button class="listing-visual" data-detail="${esc(listing.slug || listing.id)}" aria-label="${esc(t('view'))}: ${esc(listing.title)}">${image(listing)}<span>${esc(cat)}</span></button>
      <div class="listing-card-copy"><small>${esc(listing.seller?.name || '')}</small><h3><button data-detail="${esc(listing.slug || listing.id)}">${esc(listing.title)}</button></h3>
        <p>${esc(listing.description || '')}</p><strong>${money(listing.price, listing.currency)}</strong>
      </div></article>`;
  }
  function loadingState() { return `<div class="state-message" role="status"><span class="spinner-border spinner-border-sm" aria-hidden="true"></span> ${esc(t('loading'))}</div>`; }
  function errorState() { return `<div class="state-message">${alertBox(state.error || t('error'), true)}${actionButton(t('retry'), 'retry-catalog')}</div>`; }
  function storePage() {
    const result = state.loading ? loadingState() : state.error ? errorState() : state.listings.length ? `<div class="listing-grid">${state.listings.map(listingCard).join('')}</div>` : `<p class="state-message">${esc(t('noListings'))}</p>`;
    const availableProducts = state.listings.filter((listing) => String(listing.type || '').toLowerCase() === 'product');
    const featuredProducts = availableProducts.filter((listing) => !state.wishlistOnly || state.wishlist.includes(String(listing.id))).slice(0, 6);
    const featuredContent = state.loading ? loadingState()
      : state.error ? `<div class="featured-empty">${alertBox(state.error, true)}${actionButton(t('retry'), 'retry-catalog')}</div>`
        : featuredProducts.length ? `<div class="featured-grid">${featuredProducts.map(listingCard).join('')}</div>`
          : `<p class="featured-empty">${esc(state.wishlistOnly ? t('wishlistEmpty') : t('noListings'))}</p>`;
    const editCategories = ['categoryBags', 'categoryShoes', 'categoryDresses', 'categoryEyewear', 'categoryWatches', 'categoryOutfits', 'categoryBeauty', 'categoryHome'];
    const categoryIcons = ['fa-bag-shopping', 'fa-shoe-prints', 'fa-person-dress', 'fa-glasses', 'fa-clock', 'fa-wand-magic-sparkles', 'fa-spa', 'fa-house'];
    return `<section class="market-hero" aria-label="${esc(t('fashionCategories'))}">
        <div class="hero-slides" aria-hidden="true">${heroSlides.map((slide, index) => `<div class="hero-slide ${index === state.heroSlide ? 'is-active' : ''}" data-hero-slide="${index}" aria-hidden="${index !== state.heroSlide}"><img src="${heroImageUrl(slide)}" alt="" loading="eager" fetchpriority="${index === 0 ? 'high' : 'low'}" style="object-position:${slide.position}"></div>`).join('')}</div>
        <div class="hero-shade" aria-hidden="true"></div>
        <div class="hero-content"><span class="overline"><span class="hero-rule"></span>${esc(t('heroKicker'))}</span><h1>${esc(t('heroTitle'))}</h1><p>${esc(t('heroText'))}</p><div class="hero-actions"><button class="button-dark btn btn-primary" data-scroll="catalog">${esc(t('browse'))}<span aria-hidden="true">↗</span></button><button class="button-quiet" data-filter-services>${esc(t('exploreServices'))}<span aria-hidden="true">↗</span></button></div></div>
        <div class="hero-credit">${esc(heroText('credit'))} <a href="https://unsplash.com/license" target="_blank" rel="noopener noreferrer">Unsplash</a></div>
        <div class="hero-controls" role="group" aria-label="${esc(heroText('controls'))}">
          <button class="hero-arrow" type="button" data-hero-step="-1" aria-label="${esc(heroText('previous'))}"><i class="fa-solid fa-arrow-left" aria-hidden="true"></i></button>
          <div class="hero-dots">${heroSlides.map((_, index) => `<button class="hero-dot" type="button" data-hero-index="${index}" aria-label="${esc(heroText('slide'))} ${index + 1}" ${index === state.heroSlide ? 'aria-current="true"' : ''}></button>`).join('')}</div>
          <button class="hero-arrow" type="button" data-hero-step="1" aria-label="${esc(heroText('next'))}"><i class="fa-solid fa-arrow-right" aria-hidden="true"></i></button>
          <button class="hero-toggle" type="button" data-hero-toggle aria-label="${esc(heroText(state.heroPaused ? 'resume' : 'pause'))}" aria-pressed="${state.heroPaused}"><i class="fa-solid ${state.heroPaused ? 'fa-play' : 'fa-pause'}" aria-hidden="true"></i></button>
        </div>
      </section>
      <section class="fashion-edit" id="fashion-categories" aria-label="${esc(t('categories'))}"><div class="fashion-category-grid">${editCategories.map((key, index) => `<button class="fashion-category" type="button" data-fashion-query="${esc(t(key))}" style="--category-image:url('${categoryImageUrl(categoryImageIds[index])}')"><span class="fashion-category-shade"></span><span class="fashion-category-number">0${index + 1}</span><i class="fa-solid ${categoryIcons[index]}" aria-hidden="true"></i><span class="fashion-category-name">${esc(t(key))}</span><span class="fashion-category-arrow" aria-hidden="true">↗</span></button>`).join('')}</div></section>
      <section class="featured-section" id="featured-picks"><div class="featured-heading"><div><span class="overline">${esc(t('latest'))}</span><h2>${esc(t(state.wishlistOnly ? 'wishlist' : 'featured'))}</h2></div>${state.wishlistOnly ? `<button class="featured-all" data-show-all-featured>${esc(t('viewAll'))}<span aria-hidden="true">↗</span></button>` : `<button class="featured-all" data-scroll="catalog">${esc(t('viewAll'))}<span aria-hidden="true">↗</span></button>`}</div>${featuredContent}</section>
      <section class="market-section category-section"><div class="section-heading"><span class="overline">${esc(t('categories'))}</span><h2>${esc(t('all'))}</h2></div>
        ${state.categories.length ? `<div class="category-pills"><button class="${!state.category ? 'selected' : ''}" data-category="">${esc(t('all'))}</button>${state.categories.map((category) => `<button class="${String(category.id) === state.category ? 'selected' : ''}" data-category="${esc(category.id)}">${esc(category.name)} <small>${Number(category.listing_count) || 0}</small></button>`).join('')}</div>` : `<p>${esc(t('noCategories'))}</p>`}
      </section><section class="market-section catalog-section" id="catalog"><div class="section-heading section-heading-row"><div><span class="overline">${esc(t('latest'))}</span><h2>${esc(t('discover'))}</h2></div><div class="catalog-filters"><label>${esc(t('type'))}<select data-filter="type"><option value="">${esc(t('allTypes'))}</option><option value="product" ${state.type === 'product' ? 'selected' : ''}>${esc(t('product'))}</option><option value="service" ${state.type === 'service' ? 'selected' : ''}>${esc(t('service'))}</option></select></label></div></div>${result}</section>`;
  }
  function detailPage() {
    const listing = state.listing;
    if (state.loading) return `<section class="market-section">${loadingState()}</section>`;
    if (state.error || !listing) return `<section class="market-section">${alertBox(state.error || t('error'), true)}<button class="text-button" data-page="store">← ${esc(t('back'))}</button></section>`;
    const pics = (Array.isArray(listing.images) ? listing.images : []).map(imageUrl).filter(Boolean);
    return `<section class="market-section detail-page"><button class="text-button mb-4" data-page="store">← ${esc(t('back'))}</button><div class="detail-grid">
      <div class="gallery">${pics.length ? `<div class="gallery-main">${image({ images: [pics[state.slide % pics.length]], title: listing.title })}<div class="gallery-controls"><button data-action="slide" data-delta="-1" aria-label="Previous image">←</button><button data-action="slide" data-delta="1" aria-label="Next image">→</button></div></div><div class="gallery-thumbs">${pics.map((src, index) => `<button class="${index === state.slide ? 'active' : ''}" data-action="slide-to" data-index="${index}"><img src="${esc(src)}" alt="${esc(listing.title)}"></button>`).join('')}</div>` : `<div class="listing-image-empty detail-empty"></div>`}</div>
      <div class="detail-copy"><span class="overline">${esc(listing.category?.name || '')}</span><h1>${esc(listing.title)}</h1><strong class="detail-price">${money(listing.price, listing.currency)}</strong><p>${esc(listing.description || '')}</p><p>${esc(t('sellerLabel'))}: ${esc(listing.seller?.name || '')}</p><p>${esc(t('type'))}: ${esc(listing.type || '')}</p><p>${esc(t('stock') || 'Stock')}: ${Number(listing.stock) || 0}</p>${Number(listing.stock) > 0 ? actionButton(t('addCart'), 'add-cart', `data-id="${esc(listing.id)}"`) : `<p>${esc(t('unavailable'))}</p>`}<p class="detail-disclaimer">${esc(t('checkoutNote'))}</p></div>
      </div></section>`;
  }
  function authPage() {
    return `<section class="auth-wrap"><div class="login-panel"><span class="overline">MARKETPLACE</span><h1>${esc(state.authMode === 'register' ? t('register') : t('login'))}</h1><p>${esc(t('accountNote'))}</p>
      <div class="auth-tabs"><button class="${state.authMode === 'login' ? 'active' : ''}" data-auth-mode="login">${esc(t('login'))}</button><button class="${state.authMode === 'register' ? 'active' : ''}" data-auth-mode="register">${esc(t('register'))}</button></div>
      <form data-form="auth"><label>${esc(t('email'))}<input type="email" name="email" autocomplete="email" required></label>${state.authMode === 'register' ? `<label>${esc(t('name'))}<input name="name" autocomplete="name" required></label>` : ''}<label>${esc(t('password'))}<input type="password" name="password" autocomplete="${state.authMode === 'register' ? 'new-password' : 'current-password'}" required></label>${state.authMode === 'register' ? `<label>${esc(t('confirm'))}<input type="password" name="password_confirmation" autocomplete="new-password" required></label>` : ''}<div class="form-feedback" role="alert"></div><button class="button-dark btn btn-primary" type="submit">${esc(state.authMode === 'register' ? t('createAccount') : t('signIn'))}</button></form></div></section>`;
  }
  function accountPage() {
    if (!state.token || !state.user) return `<section class="market-section">${alertBox(t('loginRequired'))}<button class="button-dark btn btn-primary" data-page="login">${esc(t('login'))}</button></section>`;
    return `<section class="market-section account-panel"><span class="overline">${esc(t('account'))}</span><h1>${esc(t('profile'))}</h1><p>${esc(t('signedIn'))} ${esc(state.user.name || state.user.email || '')}</p><form data-form="profile" class="data-form"><label>${esc(t('name'))}<input name="name" value="${esc(state.user.name || '')}" required></label><label>${esc(t('email'))}<input type="email" name="email" value="${esc(state.user.email || '')}" required></label><div class="form-feedback" role="status"></div><button class="button-dark btn btn-primary" type="submit">${esc(t('save'))}</button></form><button class="text-button mt-3" data-action="logout">${esc(t('logout'))}</button></section>`;
  }
  function cartPage() {
    if (!state.token) return `<section class="market-section">${alertBox(t('loginRequired'))}<button class="button-dark btn btn-primary" data-page="login">${esc(t('login'))}</button></section>`;
    if (state.loading) return `<section class="market-section">${loadingState()}</section>`;
    const items = state.cart?.items || [];
    if (state.error) return `<section class="market-section">${alertBox(state.error, true)}${actionButton(t('retry'), 'load-cart')}</section>`;
    return `<section class="market-section"><span class="overline">${esc(t('cart'))}</span><h1>${esc(t('cart'))}</h1>${items.length ? `<div class="cart-items">${items.map((item) => `<article class="cart-row">${image(item.listing || {}, '')}<div class="cart-row-content"><h2>${esc(item.listing?.title || '')}</h2><p>${money(item.listing?.price, item.listing?.currency)}</p><label>${esc(t('quantity'))}<input type="number" min="1" max="${Math.max(1, Number(item.listing?.stock) || 99)}" value="${Number(item.quantity) || 1}" data-cart-quantity="${esc(item.id)}"></label><button class="text-button" data-action="remove-cart" data-id="${esc(item.id)}">${esc(t('remove'))}</button></div></article>`).join('')}</div><div class="cart-summary"><strong>${esc(t('subtotal'))}: ${money(state.cart.subtotal)}</strong><p>${esc(t('checkoutNote'))}</p><form data-form="checkout"><div class="form-feedback" role="status"></div><button class="button-dark btn btn-primary" type="submit">${esc(t('checkout'))}</button></form></div>` : `<p class="state-message">${esc(t('cartEmpty'))}</p>`}</section>`;
  }
  function ordersPage() {
    if (!state.token) return `<section class="market-section">${alertBox(t('loginRequired'))}<button class="button-dark btn btn-primary" data-page="login">${esc(t('login'))}</button></section>`;
    if (state.loading) return `<section class="market-section">${loadingState()}</section>`;
    if (state.error) return `<section class="market-section">${alertBox(state.error, true)}${actionButton(t('retry'), 'load-orders')}</section>`;
    const orders = Array.isArray(state.orders) ? state.orders : state.orders?.orders || [];
    return `<section class="market-section"><span class="overline">${esc(t('account'))}</span><h1>${esc(t('orderHistory'))}</h1>${state.orderNotice ? alertBox(state.orderNotice) : ''}${orders.length ? `<div class="table-responsive"><table class="table align-middle"><thead><tr><th>${esc(t('date'))}</th><th>${esc(t('total'))}</th><th>${esc(t('status'))}</th><th>${esc(t('paymentPending'))}</th></tr></thead><tbody>${orders.map((order) => `<tr><td>${esc(order.created_at || order.date || '')}</td><td>${money(order.subtotal ?? order.total, order.currency)}</td><td>${esc(displayStatus(order.items?.[0]?.fulfillment_status || order.status || 'pending'))}</td><td>${esc(displayStatus(`payment_${order.payment_status || order.paymentStatus || 'pending'}`))}</td></tr>`).join('')}</tbody></table></div>` : `<p class="state-message">${esc(t('noOrders'))}</p>`}</section>`;
  }
  function sellerPage() {
    if (!state.token) return `<section class="market-section">${alertBox(t('loginRequired'))}<button class="button-dark btn btn-primary" data-page="login">${esc(t('login'))}</button></section>`;
    if (state.loading) return `<section class="market-section">${loadingState()}</section>`;
    if (!isSeller()) return `<section class="market-section"><h1>${esc(t('sellerTitle'))}</h1><p>${esc(t('onboardingNote'))}</p><form data-form="onboard" class="data-form"><label>${esc(t('storeName'))}<input name="business_name" required></label><label>${esc(t('description'))}<textarea name="description" rows="4"></textarea></label><div class="form-feedback" role="alert"></div><button class="button-dark btn btn-primary" type="submit">${esc(t('onboard'))}</button></form></section>`;
    const cats = state.categories.map((category) => `<option value="${esc(category.id)}" ${String(state.listingEdit?.category?.id || state.listingEdit?.category_id || '') === String(category.id) ? 'selected' : ''}>${esc(category.name)}</option>`).join('');
    const current = state.listingEdit || {};
    const listings = state.sellerListings;
    const orders = state.sellerOrders;
    return `<section class="market-section"><span class="overline">${esc(t('sellerTitle'))}</span><h1>${esc(t('sellerTitle'))}</h1>${state.error ? `${alertBox(state.error, true)}${actionButton(t('retry'), 'retry-seller')}` : ''}
      <div class="workspace-columns"><section class="workspace-panel"><div class="panel-heading"><h2>${esc(current.id ? t('edit') : t('addListing'))}</h2></div><form data-form="listing" class="data-form">
        <label>${esc(t('title'))}<input name="title" value="${esc(current.title || '')}" required></label><label>${esc(t('description'))}<textarea name="description" rows="3">${esc(current.description || '')}</textarea></label>
        <label>${esc(t('typeLabel'))}<select name="type"><option value="product" ${current.type !== 'service' ? 'selected' : ''}>${esc(t('product'))}</option><option value="service" ${current.type === 'service' ? 'selected' : ''}>${esc(t('service'))}</option></select></label><label>${esc(t('uploadImages'))}<input type="file" name="images" accept="image/*" multiple></label>
        <label>${esc(t('category'))}<select name="category_id" required><option value="">${esc(t('selectCategory'))}</option>${cats}</select></label>
        <div class="form-row"><label>${esc(t('price'))}<input name="price" type="number" min="0" step="0.01" value="${esc(current.price ?? '')}" required></label><label>${esc(t('currency'))}<input name="currency" maxlength="3" value="${esc(current.currency || 'EUR')}" required></label><label>${esc(t('stock'))}<input name="stock" type="number" min="0" step="1" value="${esc(current.stock ?? 0)}"></label></div>
        <div class="form-feedback" role="alert"></div><button class="button-dark btn btn-primary" type="submit">${esc(t('saveListing'))}</button>${current.id ? `<button class="text-button" type="button" data-action="cancel-edit">${esc(t('close'))}</button>` : ''}</form>
        <h2 class="mt-5">${esc(t('listings'))}</h2>${listings.length ? listings.map((listing) => `<article class="seller-listing"><div>${image(listing)}<h3>${esc(listing.title)}</h3><p>${money(listing.price, listing.currency)}</p></div><div><button class="text-button" data-action="edit-listing" data-id="${esc(listing.id)}">${esc(t('edit'))}</button><button class="text-button" data-action="delete-listing" data-id="${esc(listing.id)}">${esc(t('delete'))}</button><form data-form="images" data-id="${esc(listing.id)}"><label>${esc(t('uploadImages'))}<input type="file" name="images" accept="image/*" multiple></label><button class="button-small btn btn-sm" type="submit">${esc(t('uploadImages'))}</button></form></div></article>`).join('') : `<p>${esc(t('noSellerListings'))}</p>`}</section>
        <section class="workspace-panel"><h2>${esc(t('sellerOrders'))}</h2>${orders.length ? orders.map((order) => `<article class="seller-order"><h3>${esc(order.id || order.order_number || '')}</h3><p>${esc(displayStatus(`payment_${order.payment_status || 'pending'}`))} · ${money((order.items || []).reduce((sum, item) => sum + Number(item.line_total || 0), 0), order.currency)}</p>${(order.items || []).map((item) => `<div class="seller-order-item"><span>${esc(item.title || '')}</span><span>${esc(displayStatus(item.fulfillment_status || 'pending'))}</span>${order.payment_status === 'paid' ? `<form data-form="seller-order" data-order="${esc(order.id)}" data-item="${esc(item.id)}"><select name="fulfillment_status"><option value="processing" ${item.fulfillment_status === 'processing' ? 'selected' : ''}>${esc(t('status_processing'))}</option><option value="shipped" ${item.fulfillment_status === 'shipped' ? 'selected' : ''}>${esc(t('status_shipped'))}</option><option value="delivered" ${item.fulfillment_status === 'delivered' ? 'selected' : ''}>${esc(t('status_delivered'))}</option><option value="cancelled" ${item.fulfillment_status === 'cancelled' ? 'selected' : ''}>${esc(t('status_cancelled'))}</option></select><button class="button-small btn btn-sm" type="submit">${esc(t('updateOrder'))}</button></form>` : ''}</div>`).join('')}</article>`).join('') : `<p>${esc(t('noSellerOrders'))}</p>`}</section></div></section>`;
  }
  function dataSummary(data) {
    if (!data || typeof data !== 'object') return `<p>${esc(t('empty'))}</p>`;
    const values = Object.entries(data).filter(([, value]) => value === null || ['string', 'number', 'boolean'].includes(typeof value));
    return `${values.length ? `<dl class="dashboard-metrics">${values.map(([key, value]) => `<div><dt>${esc(key.replace(/[_-]/g, ' '))}</dt><dd>${esc(value ?? '—')}</dd></div>`).join('')}</dl>` : ''}${values.length !== Object.keys(data).length ? `<pre class="dashboard-data">${esc(JSON.stringify(data, null, 2))}</pre>` : ''}${values.length || Object.keys(data).length ? '' : `<p>${esc(t('empty'))}</p>`}`;
  }
  function adminPage() {
    if (!state.token || !isAdmin()) return `<section class="market-section"><h1>${esc(t('adminTitle'))}</h1>${alertBox(t('noAdmin'), true)}<p>${esc(t('serverAuth'))}</p></section>`;
    if (state.loading) return `<section class="market-section">${loadingState()}</section>`;
    const pending = Array.isArray(state.pendingListings) ? state.pendingListings : state.pendingListings?.listings || [];
    const sellers = Array.isArray(state.pendingSellers) ? state.pendingSellers : state.pendingSellers?.sellers || [];
    return `<section class="market-section"><span class="overline">${esc(t('adminTitle'))}</span><h1>${esc(t('dashboard'))}</h1><p>${esc(t('serverAuth'))}</p>${state.error ? `${alertBox(state.error, true)}${actionButton(t('retry'), 'retry-admin')}` : ''}<div class="workspace-columns"><section class="workspace-panel"><h2>${esc(t('dashboard'))}</h2>${dataSummary(state.adminDashboard)}</section><section class="workspace-panel"><h2>${esc(t('pendingListings'))}</h2>${pending.length ? pending.map((listing) => `<article class="seller-listing">${image(listing)}<div><h3>${esc(listing.title)}</h3><p>${esc(listing.seller?.name || '')} · ${money(listing.price, listing.currency)}</p><p>${esc(listing.description || '')}</p><button class="button-small btn btn-sm" data-action="review-listing" data-id="${esc(listing.id)}" data-status="approved">${esc(t('approve'))}</button> <button class="button-small btn btn-sm" data-action="review-listing" data-id="${esc(listing.id)}" data-status="rejected">${esc(t('reject'))}</button></div></article>`).join('') : `<p>${esc(t('noPending'))}</p>`}</section></div><section class="workspace-panel admin-sellers-panel"><h2>${esc(t('pendingSellers'))}</h2>${sellers.length ? sellers.map((seller) => `<article class="seller-application"><h3>${esc(seller.business_name || t('sellerApplication'))}</h3><p>${esc(seller.user?.name || '')} · ${esc(seller.user?.email || '')}</p><p>${esc(seller.description || '')}</p><button class="button-small btn btn-sm" data-action="review-seller" data-id="${esc(seller.id)}" data-decision="approved">${esc(t('approve'))}</button> <button class="button-small btn btn-sm" data-action="review-seller" data-id="${esc(seller.id)}" data-decision="rejected">${esc(t('reject'))}</button></article>`).join('') : `<p>${esc(t('noPendingSellers'))}</p>`}</section></section>`;
  }
  function renderPage() {
    switch (state.page) {
      case 'detail': return detailPage();
      case 'login': return authPage();
      case 'account': return accountPage();
      case 'cart': return cartPage();
      case 'orders': return ordersPage();
      case 'seller': return sellerPage();
      case 'admin': return adminPage();
      default: return storePage();
    }
  }
  function render() { shell(); }
  let catalogRequest = 0;
  async function loadCatalog() {
    const requestId = ++catalogRequest;
    state.loading = true;
    state.error = '';
    render();
    const params = new URLSearchParams();
    if (state.query.trim()) params.set('q', state.query.trim());
    if (state.category) params.set('category', state.category);
    if (state.type) params.set('type', state.type);
    try {
      const [categoryData, listingData] = await Promise.all([api('/categories'), api(`/listings?${params}`)]);
      if (requestId !== catalogRequest) return;
      state.categories = categoryData?.categories || [];
      state.listings = listingData?.listings || [];
    } catch (error) {
      if (requestId !== catalogRequest) return;
      state.error = error.message;
    }
    state.loading = false;
    render();
  }
  async function loadCart() {
    state.page = 'cart'; state.loading = true; state.error = ''; render();
    try { state.cart = await api('/cart'); } catch (error) { state.error = error.message; }
    state.loading = false; render();
  }
  async function loadOrders() {
    state.page = 'orders'; state.loading = true; state.error = ''; render();
    try { const data = await api('/orders'); state.orders = data?.orders || data || []; } catch (error) { state.error = error.message; }
    state.loading = false; render();
  }
  async function loadSeller() {
    state.page = 'seller'; state.loading = true; state.error = '';
    if (!isSeller()) { state.loading = false; render(); return; }
    render();
    try {
      const [listings, orders] = await Promise.all([api('/seller/listings'), api('/seller/orders')]);
      state.sellerListings = listings?.listings || listings || [];
      state.sellerOrders = orders?.orders || orders || [];
    } catch (error) { state.error = error.message; }
    state.loading = false; render();
  }
  async function loadAdmin() {
    state.page = 'admin'; state.loading = true; state.error = ''; render();
    if (!isAdmin()) { state.loading = false; render(); return; }
    try {
      const [dashboard, pending, sellers] = await Promise.all([api('/admin/dashboard'), api('/admin/listings/pending'), api('/admin/sellers/pending')]);
      state.adminDashboard = dashboard?.dashboard || dashboard;
      state.pendingListings = pending?.listings || pending || [];
      state.pendingSellers = sellers?.sellers || sellers || [];
    } catch (error) { state.error = error.message; }
    state.loading = false; render();
  }
  async function loadDetail(identifier) {
    state.page = 'detail'; state.loading = true; state.error = ''; state.listing = null; state.slide = 0; render();
    try { const data = await api(`/listings/${encodeURIComponent(identifier)}`); state.listing = data?.listing || data; }
    catch (error) { state.error = error.message; }
    state.loading = false; render();
  }
  async function refreshUser() {
    const data = await api('/user');
    state.user = data?.user || data;
  }
  async function go(page) {
    if (page === 'store') { state.page = 'store'; render(); return; }
    if (page === 'login' || page === 'account') { state.page = state.token ? 'account' : 'login'; render(); return; }
    if (page === 'cart') return loadCart();
    if (page === 'orders') return loadOrders();
    if (page === 'seller') return loadSeller();
    if (page === 'admin') return loadAdmin();
  }
  document.addEventListener('click', async (event) => {
    const wishlistButton = event.target.closest('[data-wishlist]');
    if (wishlistButton) {
      const identifier = String(wishlistButton.dataset.wishlist);
      state.wishlist = state.wishlist.includes(identifier)
        ? state.wishlist.filter((id) => id !== identifier)
        : [...state.wishlist, identifier];
      localStorage.setItem('mp-wishlist', JSON.stringify(state.wishlist));
      render();
      return;
    }
    const openWishlist = event.target.closest('[data-open-wishlist]');
    if (openWishlist) {
      state.wishlistOnly = true;
      render();
      document.getElementById('featured-picks')?.scrollIntoView({ behavior: 'smooth' });
      return;
    }
    const showAllFeatured = event.target.closest('[data-show-all-featured]');
    if (showAllFeatured) {
      state.wishlistOnly = false;
      render();
      return;
    }
    const heroStep = event.target.closest('[data-hero-step]');
    if (heroStep) { changeHeroSlide(state.heroSlide + Number(heroStep.dataset.heroStep)); return; }
    const heroIndex = event.target.closest('[data-hero-index]');
    if (heroIndex) { changeHeroSlide(Number(heroIndex.dataset.heroIndex)); return; }
    const heroToggle = event.target.closest('[data-hero-toggle]');
    if (heroToggle) {
      state.heroPaused = !state.heroPaused;
      heroToggle.setAttribute('aria-label', heroText(state.heroPaused ? 'resume' : 'pause'));
      heroToggle.setAttribute('aria-pressed', String(state.heroPaused));
      heroToggle.querySelector('i').className = `fa-solid ${state.heroPaused ? 'fa-play' : 'fa-pause'}`;
      if (state.heroPaused) stopHeroTimer();
      else scheduleHeroSlide();
      return;
    }
    const page = event.target.closest('[data-page]');
    if (page) { event.preventDefault(); go(page.dataset.page); return; }
    const detail = event.target.closest('[data-detail]');
    if (detail) { loadDetail(detail.dataset.detail); return; }
    const category = event.target.closest('[data-category]');
    if (category) { state.category = category.dataset.category; state.page = 'store'; loadCatalog(); return; }
    const fashionQuery = event.target.closest('[data-fashion-query]');
    if (fashionQuery) {
      state.query = fashionQuery.dataset.fashionQuery;
      state.category = '';
      state.type = '';
      state.page = 'store';
      await loadCatalog();
      document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' });
      return;
    }
    const services = event.target.closest('[data-filter-services]');
    if (services) {
      state.query = '';
      state.category = '';
      state.type = 'service';
      state.page = 'store';
      await loadCatalog();
      document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' });
      return;
    }
    const setting = event.target.closest('[data-setting]');
    if (setting) {
      if (setting.dataset.setting === 'theme') { state.theme = state.theme === 'dark' ? 'light' : 'dark'; localStorage.setItem('mp-theme', state.theme); render(); }
      return;
    }
    const scroll = event.target.closest('[data-scroll]');
    if (scroll) { document.getElementById(scroll.dataset.scroll)?.scrollIntoView({ behavior: 'smooth' }); return; }
    const mode = event.target.closest('[data-auth-mode]');
    if (mode) { state.authMode = mode.dataset.authMode; render(); return; }
    const action = event.target.closest('[data-action]');
    if (!action) return;
    if (action.dataset.action === 'retry-catalog') loadCatalog();
    if (action.dataset.action === 'load-cart') loadCart();
    if (action.dataset.action === 'load-orders') loadOrders();
    if (action.dataset.action === 'retry-seller') loadSeller();
    if (action.dataset.action === 'retry-admin') loadAdmin();
    if (action.dataset.action === 'slide' && state.listing) { const length = state.listing.images?.length || 1; state.slide = (state.slide + Number(action.dataset.delta) + length) % length; render(); }
    if (action.dataset.action === 'slide-to') { state.slide = Number(action.dataset.index) || 0; render(); }
    if (action.dataset.action === 'add-cart') {
      if (!state.token) { state.page = 'login'; render(); return; }
      try { await api('/cart/items', { method: 'POST', body: { listing_id: action.dataset.id, quantity: 1 } }); state.cart = await api('/cart'); render(); notify(t('addCart')); }
      catch (error) { notify(error.message, true); }
    }
    if (action.dataset.action === 'remove-cart') {
      try { await api(`/cart/items/${encodeURIComponent(action.dataset.id)}`, { method: 'DELETE' }); loadCart(); }
      catch (error) { notify(error.message, true); }
    }
    if (action.dataset.action === 'logout') {
      try {
        await api('/logout', { method: 'POST' });
        state.token = null; state.user = null; state.cart = null; state.orders = []; state.page = 'store';
        try { sessionStorage.removeItem('mp-token'); } catch {}
        render();
      } catch (error) {
        if (!state.token) { state.user = null; state.cart = null; state.orders = []; state.page = 'store'; render(); }
        else notify(error.message, true);
      }
    }
    if (action.dataset.action === 'edit-listing') {
      state.listingEdit = state.sellerListings.find((item) => String(item.id) === action.dataset.id) || null; render();
    }
    if (action.dataset.action === 'cancel-edit') { state.listingEdit = null; render(); }
    if (action.dataset.action === 'delete-listing') {
      if (!confirm(t('delete') + '?')) return;
      try { await api(`/seller/listings/${encodeURIComponent(action.dataset.id)}`, { method: 'DELETE' }); notify(t('deleted')); loadSeller(); }
      catch (error) { notify(error.message, true); }
    }
    if (action.dataset.action === 'review-listing') {
      try {
        await api(`/admin/listings/${encodeURIComponent(action.dataset.id)}/review`, { method: 'POST', body: { decision: action.dataset.status } });
        notify(t(action.dataset.status === 'approved' ? 'approve' : 'reject')); loadAdmin();
      } catch (error) { notify(error.message || t('reviewError'), true); }
    }
    if (action.dataset.action === 'review-seller') {
      try {
        await api(`/admin/sellers/${encodeURIComponent(action.dataset.id)}/review`, { method: 'POST', body: { decision: action.dataset.decision } });
        notify(t(action.dataset.decision === 'approved' ? 'approve' : 'reject')); loadAdmin();
      } catch (error) { notify(error.message || t('reviewError'), true); }
    }
  });
  document.addEventListener('pointerover', (event) => {
    const hero = event.target.closest?.('.market-hero');
    if (hero && !hero.contains(event.relatedTarget)) setHeroPauseReason('hover', true);
  });
  document.addEventListener('pointerout', (event) => {
    const hero = event.target.closest?.('.market-hero');
    if (hero && !hero.contains(event.relatedTarget)) setHeroPauseReason('hover', false);
  });
  document.addEventListener('focusin', (event) => {
    if (event.target.closest?.('.market-hero')) setHeroPauseReason('focus', true);
  });
  document.addEventListener('focusout', (event) => {
    const hero = event.target.closest?.('.market-hero');
    if (hero && !hero.contains(event.relatedTarget)) setHeroPauseReason('focus', false);
  });
  reducedMotion.addEventListener('change', () => {
    if (reducedMotion.matches) stopHeroTimer();
    else scheduleHeroSlide();
  });
  document.addEventListener('change', async (event) => {
    const filter = event.target.closest('[data-filter="type"]');
    if (filter) { state.type = filter.value; loadCatalog(); return; }
    const language = event.target.closest('[data-setting="lang"]');
    if (language) { state.lang = language.value; localStorage.setItem('mp-lang', state.lang); render(); }
    const quantity = event.target.closest('[data-cart-quantity]');
    if (quantity) {
      const value = Math.max(1, Number(quantity.value) || 1);
      try { await api(`/cart/items/${encodeURIComponent(quantity.dataset.cartQuantity)}`, { method: 'PATCH', body: { quantity: value } }); loadCart(); }
      catch (error) { notify(error.message, true); }
    }
  });
  document.addEventListener('submit', async (event) => {
    const form = event.target;
    const kind = form.dataset.form;
    if (!kind) return;
    event.preventDefault();
    const feedback = form.querySelector('.form-feedback');
    const showFeedback = (message, isError = false) => {
      if (feedback) { feedback.textContent = message; feedback.className = `form-feedback ${isError ? 'text-danger' : 'text-success'}`; }
    };
    const submitButton = form.querySelector('button[type="submit"]');
    if (submitButton) submitButton.disabled = true;
    form.setAttribute('aria-busy', 'true');
    showFeedback(t('loading'));
    const values = new FormData(form);
    try {
      if (kind === 'search') {
        state.query = String(values.get('q') || '').trim();
        state.page = 'store'; loadCatalog(); return;
      }
      if (kind === 'auth') {
        const registering = state.authMode === 'register';
        const body = { email: String(values.get('email') || '').trim(), password: String(values.get('password') || ''), device_name: 'marketplace-web' };
        if (registering) Object.assign(body, { name: String(values.get('name') || '').trim(), password_confirmation: String(values.get('password_confirmation') || '') });
        const data = await api(registering ? '/register' : '/login', { method: 'POST', body });
        state.token = data?.token || data?.access_token || data?.plainTextToken;
        if (!state.token) throw new Error(registering ? t('registerError') : t('loginError'));
        try { sessionStorage.setItem('mp-token', state.token); } catch {}
        state.user = data?.user || null;
        await refreshUser();
        state.page = 'account'; render(); return;
      }
      if (kind === 'profile') {
        const data = await api('/user', { method: 'PATCH', body: { name: String(values.get('name') || '').trim(), email: String(values.get('email') || '').trim() } });
        state.user = data?.user || data || state.user; render(); notify(t('saved')); return;
      }
      if (kind === 'checkout') {
        const data = await api('/orders', { method: 'POST' });
        state.orderNotice = `${t('orderPlaced')} ${data?.order?.id || data?.id || ''} ${t('checkoutNote')}`;
        state.cart = null;
        await loadOrders();
        return;
      }
      if (kind === 'onboard') {
        await api('/seller/onboard', { method: 'POST', body: { business_name: String(values.get('business_name') || '').trim(), description: String(values.get('description') || '').trim() } });
        await refreshUser();
        if (isSeller()) { notify(t('onboarded')); loadSeller(); }
        else showFeedback(t('onboarded'));
        return;
      }
      if (kind === 'listing') {
        const id = state.listingEdit?.id;
        const imageFiles = values.getAll('images').filter((file) => file instanceof File && file.size > 0);
        const body = { title: String(values.get('title') || '').trim(), description: String(values.get('description') || '').trim(), type: String(values.get('type') || 'product'), category_id: values.get('category_id'), price: Number(values.get('price')), currency: String(values.get('currency') || 'EUR').toUpperCase(), stock: Number(values.get('stock') || 0) };
        const result = await api(id ? `/seller/listings/${encodeURIComponent(id)}` : '/seller/listings', { method: id ? 'PATCH' : 'POST', body });
        const listing = result?.listing || result;
        state.listingEdit = null;
        if (listing?.id && imageFiles.length) {
          const imageForm = new FormData();
          for (const file of imageFiles) imageForm.append('images[]', file);
          await api(`/seller/listings/${encodeURIComponent(listing.id)}/images`, { method: 'POST', body: imageForm });
        }
        notify(id ? t('updated') : t('created')); loadSeller(); return;
      }
      if (kind === 'images') {
        const imageForm = new FormData();
        for (const file of form.querySelector('input[type="file"]').files) imageForm.append('images[]', file);
        if (!imageForm.has('images[]')) throw new Error(t('requestFailed'));
        await api(`/seller/listings/${encodeURIComponent(form.dataset.id)}/images`, { method: 'POST', body: imageForm });
        notify(t('imageUploaded')); loadSeller(); return;
      }
      if (kind === 'seller-order') {
        await api(`/seller/orders/${encodeURIComponent(form.dataset.order)}/items/${encodeURIComponent(form.dataset.item)}`, { method: 'PATCH', body: { fulfillment_status: values.get('fulfillment_status') } });
        loadSeller(); return;
      }
    } catch (error) {
      const message = error.message || (kind === 'auth' ? state.authMode === 'register' ? t('registerError') : t('loginError') : t('error'));
      showFeedback(message, true);
    } finally {
      if (form.isConnected && submitButton) {
        submitButton.disabled = false;
        form.removeAttribute('aria-busy');
      }
    }
  });
  document.addEventListener('change', (event) => {
    const theme = event.target.closest('[data-setting="theme"]');
    if (theme) { state.theme = theme.checked ? 'dark' : 'light'; localStorage.setItem('mp-theme', state.theme); render(); }
  });
  render();
  Promise.resolve(state.token ? refreshUser().catch(() => { state.token = null; try { sessionStorage.removeItem('mp-token'); } catch {} }) : null)
    .finally(() => { render(); loadCatalog(); });
})();
