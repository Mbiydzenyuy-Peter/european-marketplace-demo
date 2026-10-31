(() => {
  const API_BASE = window.MarketplaceApiClient.resolveBaseUrl({
    configuredBase: document.querySelector('meta[name="marketplace-api-base"]')?.content || '',
    hostname: window.location.hostname,
    protocol: window.location.protocol
  });
  const BRAND_NAME = (document.querySelector('meta[name="marketplace-brand"]')?.content || 'Marketplace').trim();
  const words = {
    de: {
      discover: 'Entdecken', categories: 'Kategorien', search: 'Suche', account: 'Konto', cart: 'Warenkorb', wishlist: 'Merkliste', wishlistEmpty: 'In den aktuellen Angeboten sind keine gemerkten Artikel.', featured: 'Ausgewählte Highlights', viewAll: 'Alle Angebote ansehen', favorite: 'Auf die Merkliste', unfavorite: 'Von der Merkliste entfernen', orders: 'Bestellungen', seller: 'Verkaufen', admin: 'Administration', language: 'Sprache', theme: 'Darstellung', light: 'Hell', dark: 'Dunkel',
      heroKicker: 'Der europäische Marktplatz · Start in Deutschland', heroTitle: 'Besonderes finden. Europa entdecken.', heroText: 'Ein sorgfältig kuratierter Marktplatz für Design, Kinderwelten, Wohnen, Services und ausgewählte Angebote unabhängiger Anbieter.', browse: 'Marktplatz entdecken', exploreServices: 'Services entdecken', heroImageAlt: 'Editoriale Szene für einen kuratierten europäischen Marktplatz', imageCredit: 'Bildmaterial via', fashionCategories: 'Alle Marktplatzkategorien entdecken', categoryBags: 'Taschen', categoryShoes: 'Schuhe', categoryDresses: 'Kleider', categoryEyewear: 'Brillen', categoryWatches: 'Uhren', categoryOutfits: 'Outfits', categoryBeauty: 'Beauty', categoryHome: 'Wohnen', latest: 'Ausgewählte Angebote', all: 'Alle 30 Kategorien', category: 'Kategorie', type: 'Angebotstyp', allTypes: 'Alle Typen', product: 'Produkt', service: 'Dienstleistung', stock: 'Bestand', searchPlaceholder: 'Angebote suchen', view: 'Details ansehen', noListings: 'Zurzeit sind keine Angebote verfügbar.', noCategories: 'Zurzeit sind keine Kategorien verfügbar.', loading: 'Wird geladen …', retry: 'Erneut versuchen', catalogUnavailable: 'Produkte werden derzeit aktualisiert. Bitte versuchen Sie es später erneut.', serviceUnavailable: 'Diese Funktion ist gerade nicht verfügbar. Bitte versuchen Sie es später erneut.', error: 'Die Anfrage ist fehlgeschlagen.', childrenEdit: 'Für die kleinen Entdecker', childrenIntro: 'Sorgfältig ausgewählte Angebote für Kinder und Familien', browseChildren: 'Kinderwelten entdecken', marketplacePromise: 'Design · Alltag · Services · Entdeckungen',
      login: 'Anmelden', register: 'Konto erstellen', name: 'Name', email: 'E-Mail-Adresse', password: 'Passwort', confirm: 'Passwort bestätigen', signIn: 'Anmelden', createAccount: 'Konto erstellen', logout: 'Abmelden', signedIn: 'Angemeldet als', accountNote: 'Melde dich mit deinem Marketplace-Konto an.', loginRequired: 'Bitte melde dich an, um fortzufahren.', loginError: 'Anmeldung nicht möglich. Bitte überprüfe deine Angaben.', registerError: 'Registrierung nicht möglich. Bitte überprüfe deine Angaben.', profile: 'Profil', save: 'Speichern', saved: 'Änderungen gespeichert.', profileError: 'Profil konnte nicht aktualisiert werden.',
      validationError: 'Bitte überprüfe deine Eingaben.', forbidden: 'Du bist nicht berechtigt, diese Aktion auszuführen.', notFound: 'Der angeforderte Eintrag wurde nicht gefunden.', conflict: 'Diese Aktion kann derzeit nicht abgeschlossen werden.', rateLimited: 'Zu viele Anfragen. Bitte warte kurz und versuche es erneut.',
      addCart: 'In den Warenkorb', sellerLabel: 'Anbieter', unavailable: 'Nicht verfügbar', cartEmpty: 'Dein Warenkorb ist leer.', quantity: 'Menge', remove: 'Entfernen', subtotal: 'Zwischensumme', checkout: 'Unbezahlte Bestellanfrage senden', checkoutNote: 'Die Anfrage bleibt unbezahlt. Bestand wird 30 Minuten reserviert und bei Storno oder Ablauf freigegeben. Es erfolgt keine Zahlung.', orderPlaced: 'Unbezahlte Anfrage gespeichert; Bestand ist 30 Minuten reserviert.', orderHistory: 'Bestellverlauf', paymentPending: 'Unbezahlt', orderPending: 'Ausstehend', noOrders: 'Du hast noch keine Bestellungen.', status: 'Status', total: 'Gesamt', date: 'Datum', status_pending: 'Ausstehend', status_requested: 'Angefragt', status_processing: 'In Bearbeitung', status_shipped: 'Versandt', status_delivered: 'Zugestellt', status_cancelled: 'Storniert', status_payment_pending: 'Unbezahlt', status_payment_paid: 'Bezahlt',
      sellerTitle: 'Verkäuferbereich', onboarding: 'Verkäuferkonto einrichten', storeName: 'Shopname', description: 'Beschreibung', onboard: 'Onboarding absenden', onboardingNote: 'Die Freischaltung und Berechtigungen werden serverseitig geprüft.', listings: 'Meine Angebote', addListing: 'Angebot erstellen', title: 'Titel', price: 'Preis', currency: 'Währung', stock: 'Bestand', saveListing: 'Angebot speichern', edit: 'Bearbeiten', delete: 'Löschen', uploadImages: 'Bilder hochladen', sellerOrders: 'Verkäuferbestellungen', noSellerListings: 'Noch keine Angebote.', noSellerOrders: 'Noch keine Verkäuferbestellungen.', typeLabel: 'Typ', selectCategory: 'Kategorie wählen', created: 'Angebot erstellt.', updated: 'Angebot aktualisiert.', deleted: 'Angebot gelöscht.', imageUploaded: 'Bilder hochgeladen.', onboarded: 'Anfrage gesendet.', updateOrder: 'Bestellposition aktualisieren',
      adminTitle: 'Administration', dashboard: 'Übersicht', pendingListings: 'Angebote zur Prüfung', pendingSellers: 'Verkäuferanfragen', sellerApplication: 'Verkäuferanfrage', noPendingSellers: 'Keine Verkäuferanfragen zur Prüfung.', approve: 'Freigeben', reject: 'Ablehnen', noPending: 'Keine Angebote zur Prüfung.', reviewError: 'Prüfung fehlgeschlagen.', serverAuth: 'Diese Werkzeuge werden nur für erkannte Staff-/Admin-Rollen angezeigt. Der Server muss jede Berechtigung selbst prüfen.', noAdmin: 'Für diese Ansicht ist eine Staff- oder Admin-Rolle erforderlich.', manageListings: 'Angebote verwalten', adminSearch: 'Angebote suchen', adminCreateListing: 'Neues Angebot', selectSeller: 'Verkäufer auswählen', listingStatus: 'Angebotsstatus', saveListing: 'Angebot speichern', listingDeleteConfirm: 'Dieses Angebot wirklich löschen?', page: 'Seite', of: 'von', nextPage: 'Weiter', noAdminListings: 'Keine passenden Angebote gefunden.', status_approved: 'Freigegeben', status_pending_review: 'Wird geprüft', status_rejected: 'Abgelehnt', adminUsers: 'Benutzer verwalten', adminOrders: 'Bestellungen überwachen', adminCategories: 'Kategorien verwalten', userRole: 'Rolle', saveRole: 'Rolle speichern', roleUpdated: 'Benutzerrolle aktualisiert.', roleChangeConfirm: 'Administratorrechte für dieses Konto vergeben?', role_buyer: 'Käufer', role_seller: 'Verkäufer', role_staff: 'Mitarbeiter', role_admin: 'Administrator', orderId: 'Bestellung', orderSearch: 'Bestellungen suchen', categoryName: 'Kategoriename', categorySlug: 'Slug', saveCategory: 'Kategorie speichern', noAdminUsers: 'Keine Benutzer gefunden.', noAdminOrders: 'Keine Bestellungen gefunden.', noAdminCategories: 'Keine Kategorien vorhanden.', confirmCategoryDelete: 'Diese Kategorie löschen?', categoryImageReviewTitle: 'Kategorie-Bildprüfung', categoryImageReviewDescription: 'Private lokale Prüfung der recherchierten Unsplash-Kandidaten. Eine Unsplash-Lizenz allein bestätigt keine Rechte an abgebildeten Inhalten.', reviewPending: 'Ausstehend', reviewApproved: 'Freigegeben', reviewRejected: 'Abgelehnt', reviewStatus: 'Prüfstatus', reviewNote: 'Prüfnotiz', saveReview: 'Prüfung speichern', openUnsplash: 'Unsplash-Seite öffnen', imageUnavailable: 'Bild nicht verfügbar', reviewLoadError: 'Die Bildprüfung konnte nicht geladen werden.', reviewSaved: 'Prüfung gespeichert.',
      brand: 'Marke', model: 'Modell', sku: 'Artikelnummer', gtin: 'GTIN / Barcode', specifications: 'Spezifikationen', variantOptions: 'Variantenhinweise', featuredProduct: 'Hervorgehoben', hiddenProduct: 'Im Shop verborgen', hideProduct: 'Verbergen', unhideProduct: 'Einblenden', featureProduct: 'Hervorheben', unfeatureProduct: 'Hervorhebung entfernen', imageRightsSource: 'Bildquelle / Rechteinhaber', imageRightsLicense: 'Nutzungslizenz', setPrimary: 'Als Titelbild', replaceImage: 'Bild ersetzen', removeImage: 'Bild entfernen', gallery: 'Produktgalerie', zoomImage: 'Bild vergrößern', close: 'Schließen', back: 'Zurück', empty: 'Keine Daten vorhanden.', requestFailed: 'Die Anfrage konnte nicht abgeschlossen werden.',
      productUnavailable: 'Nicht verfügbar', productAvailable: 'Verfügbar', productDetails: 'Produktdetails', availableVariants: 'Verfügbare Ausführungen', relatedProducts: 'Ähnliche Entdeckungen', galleryIncomplete: 'Galerie oder Bildrechte unvollständig', duplicateReview: 'Dublettenprüfung', quarantine: 'Zur Prüfung zurückstellen', markDistinct: 'Als eigenständiges Produkt bestätigen', archive: 'Sicher archivieren', galleryViews: 'Bildansichten', sourceNotVerified: 'Bildrechte noch nicht dokumentiert', previousImage: 'Vorheriges Bild', nextImage: 'Nächstes Bild', primaryImage: 'Titelbild'
    },
    en: {
      discover: 'Discover', categories: 'Categories', search: 'Search', account: 'Account', cart: 'Cart', wishlist: 'Wishlist', wishlistEmpty: 'No saved items in the current listings.', featured: 'Featured Luxury Picks', viewAll: 'View all listings', favorite: 'Add to wishlist', unfavorite: 'Remove from wishlist', orders: 'Orders', seller: 'Sell', admin: 'Administration', language: 'Language', theme: 'Appearance', light: 'Light', dark: 'Dark',
      heroKicker: 'The European marketplace · launching in Germany', heroTitle: 'Find the exceptional. Discover Europe.', heroText: 'A considered marketplace for design, children’s essentials, interiors, professional services and distinctive finds from independent sellers.', browse: 'Explore the marketplace', exploreServices: 'Discover services', heroImageAlt: 'Editorial scene for a curated European marketplace', imageCredit: 'Imagery via', fashionCategories: 'Explore all marketplace categories', categoryBags: 'Bags', categoryShoes: 'Shoes', categoryDresses: 'Dresses', categoryEyewear: 'Eyewear', categoryWatches: 'Watches', categoryOutfits: 'Outfits', categoryBeauty: 'Beauty', categoryHome: 'Home & Living', latest: 'Selected listings', all: 'All 30 categories', category: 'Category', type: 'Listing type', allTypes: 'All types', product: 'Product', service: 'Service', stock: 'Stock', searchPlaceholder: 'Search listings', view: 'View details', noListings: 'There are no listings available right now.', noCategories: 'No categories are available right now.', loading: 'Loading …', retry: 'Try again', catalogUnavailable: 'Products are being updated. Please check back shortly.', serviceUnavailable: 'This feature is temporarily unavailable. Please try again later.', error: 'The request failed.', childrenEdit: 'For little explorers', childrenIntro: 'Thoughtful finds for children and family life', browseChildren: 'Explore children’s finds', marketplacePromise: 'Design · everyday living · services · discovery',
      login: 'Sign in', register: 'Create account', name: 'Name', email: 'Email address', password: 'Password', confirm: 'Confirm password', signIn: 'Sign in', createAccount: 'Create account', logout: 'Sign out', signedIn: 'Signed in as', accountNote: 'Sign in with your marketplace account.', loginRequired: 'Please sign in to continue.', loginError: 'Sign-in failed. Check your details and try again.', registerError: 'Registration failed. Check your details and try again.', profile: 'Profile', save: 'Save', saved: 'Changes saved.', profileError: 'Could not update the profile.',
      validationError: 'Please check the information you entered.', forbidden: 'You are not allowed to perform this action.', notFound: 'The requested item could not be found.', conflict: 'This action cannot be completed right now.', rateLimited: 'Too many requests. Please wait and try again.',
      addCart: 'Add to cart', sellerLabel: 'Seller', unavailable: 'Unavailable', cartEmpty: 'Your cart is empty.', quantity: 'Quantity', remove: 'Remove', subtotal: 'Subtotal', checkout: 'Send unpaid order request', checkoutNote: 'The request remains unpaid. Inventory is reserved for 30 minutes and restored on cancellation or expiry. No payment is taken.', orderPlaced: 'Unpaid request recorded; inventory is reserved for 30 minutes.', orderHistory: 'Order history', paymentPending: 'Unpaid', orderPending: 'Pending', noOrders: 'You have no orders yet.', status: 'Status', total: 'Total', date: 'Date', status_pending: 'Pending', status_requested: 'Requested', status_processing: 'Processing', status_shipped: 'Shipped', status_delivered: 'Delivered', status_cancelled: 'Cancelled', status_payment_pending: 'Unpaid', status_payment_paid: 'Paid',
      sellerTitle: 'Seller workspace', onboarding: 'Set up seller account', storeName: 'Store name', description: 'Description', onboard: 'Submit onboarding', onboardingNote: 'Approval and permissions are enforced by the server.', listings: 'My listings', addListing: 'Create listing', title: 'Title', price: 'Price', currency: 'Currency', stock: 'Stock', saveListing: 'Save listing', edit: 'Edit', delete: 'Delete', uploadImages: 'Upload images', sellerOrders: 'Seller orders', noSellerListings: 'No listings yet.', noSellerOrders: 'No seller orders yet.', typeLabel: 'Type', selectCategory: 'Choose a category', created: 'Listing created.', updated: 'Listing updated.', deleted: 'Listing deleted.', imageUploaded: 'Images uploaded.', onboarded: 'Request submitted.', updateOrder: 'Update order item',
      adminTitle: 'Administration', dashboard: 'Dashboard', pendingListings: 'Listings pending review', pendingSellers: 'Seller applications', sellerApplication: 'Seller application', noPendingSellers: 'No seller applications pending review.', approve: 'Approve', reject: 'Reject', noPending: 'No listings pending review.', reviewError: 'Review failed.', serverAuth: 'These tools appear only for recognized staff/admin roles. The server must enforce every permission.', noAdmin: 'A staff or admin role is required to view this page.', manageListings: 'Manage listings', adminSearch: 'Search listings', adminCreateListing: 'New listing', selectSeller: 'Select seller', listingStatus: 'Listing status', saveListing: 'Save listing', listingDeleteConfirm: 'Delete this listing?', page: 'Page', of: 'of', nextPage: 'Next', noAdminListings: 'No matching listings found.', status_approved: 'Approved', status_pending_review: 'Pending review', status_rejected: 'Rejected', adminUsers: 'Manage users', adminOrders: 'Order oversight', adminCategories: 'Manage categories', userRole: 'Role', saveRole: 'Save role', roleUpdated: 'User role updated.', roleChangeConfirm: 'Grant administrator access to this account?', role_buyer: 'Buyer', role_seller: 'Seller', role_staff: 'Staff', role_admin: 'Administrator', orderId: 'Order', orderSearch: 'Search orders', categoryName: 'Category name', categorySlug: 'Slug', saveCategory: 'Save category', noAdminUsers: 'No users found.', noAdminOrders: 'No orders found.', noAdminCategories: 'No categories found.', confirmCategoryDelete: 'Delete this category?', categoryImageReviewTitle: 'Category Image Review', categoryImageReviewDescription: 'Private local review of the researched Unsplash candidates. An Unsplash license alone does not clear rights to depicted content.', reviewPending: 'Pending', reviewApproved: 'Approved', reviewRejected: 'Rejected', reviewStatus: 'Review status', reviewNote: 'Review note', saveReview: 'Save review', openUnsplash: 'Open Unsplash page', imageUnavailable: 'Image unavailable', reviewLoadError: 'Category image review could not be loaded.', reviewSaved: 'Review saved.',
      brand: 'Brand', model: 'Model', sku: 'SKU', gtin: 'GTIN / barcode', supplierName: 'Supplier name (seller supplied)', supplierReference: 'Supplier product reference', supplierDataNote: 'Supplier details are seller supplied and remain subject to review; they do not imply a verified supplier relationship.', specifications: 'Specifications', variantOptions: 'Variant notes', featuredProduct: 'Featured', hiddenProduct: 'Hidden from shop', hideProduct: 'Hide', unhideProduct: 'Unhide', featureProduct: 'Feature', unfeatureProduct: 'Remove feature', imageRightsSource: 'Image source / rights holder', imageRightsLicense: 'Usage licence', setPrimary: 'Set as primary', replaceImage: 'Replace image', removeImage: 'Remove image', gallery: 'Product gallery', zoomImage: 'Enlarge image', close: 'Close', back: 'Back', empty: 'No data available.', requestFailed: 'The request could not be completed.',
      productUnavailable: 'Unavailable', productAvailable: 'Available', productDetails: 'Product details', availableVariants: 'Available variations', relatedProducts: 'Related discoveries', galleryIncomplete: 'Gallery or image rights incomplete', duplicateReview: 'Duplicate review', quarantine: 'Quarantine for review', markDistinct: 'Confirm as a distinct product', archive: 'Archive safely', galleryViews: 'Image views', sourceNotVerified: 'Image rights not documented', previousImage: 'Previous image', nextImage: 'Next image', primaryImage: 'Primary image'
    },
    fr: {
      discover: 'Découvrir', categories: 'Catégories', search: 'Recherche', account: 'Compte', cart: 'Panier', wishlist: 'Favoris', wishlistEmpty: 'Aucun article enregistré parmi les offres actuelles.', featured: 'Sélection de prestige', viewAll: 'Voir toutes les offres', favorite: 'Ajouter aux favoris', unfavorite: 'Retirer des favoris', orders: 'Commandes', seller: 'Vendre', admin: 'Administration', language: 'Langue', theme: 'Affichage', light: 'Clair', dark: 'Sombre',
      heroKicker: 'Le marché européen · lancement en Allemagne', heroTitle: 'Le goût de l’exception. L’Europe à découvrir.', heroText: 'Un marché soigneusement composé autour du design, de l’univers enfant, de la maison, des services et de belles trouvailles indépendantes.', browse: 'Explorer le marché', exploreServices: 'Découvrir les services', heroImageAlt: 'Scène éditoriale pour un marché européen sélectionné', imageCredit: 'Images via', fashionCategories: 'Explorer les catégories du marché', categoryBags: 'Sacs', categoryShoes: 'Chaussures', categoryDresses: 'Robes', categoryEyewear: 'Lunettes', categoryWatches: 'Montres', categoryOutfits: 'Tenues', categoryBeauty: 'Beauté', categoryHome: 'Maison', latest: 'Offres sélectionnées', all: 'Les 30 catégories', category: 'Catégorie', type: 'Type d’offre', allTypes: 'Tous les types', product: 'Produit', service: 'Service', stock: 'Stock', searchPlaceholder: 'Rechercher des offres', view: 'Voir les détails', noListings: 'Aucune offre disponible pour le moment.', noCategories: 'Aucune catégorie n’est disponible pour le moment.', loading: 'Chargement …', retry: 'Réessayer', catalogUnavailable: 'Les produits sont en cours de mise à jour. Veuillez réessayer plus tard.', serviceUnavailable: 'Cette fonctionnalité est temporairement indisponible. Veuillez réessayer plus tard.', error: 'La requête a échoué.', childrenEdit: 'Pour les petits explorateurs', childrenIntro: 'De belles trouvailles pour les enfants et la vie de famille', browseChildren: 'Explorer l’univers enfant', marketplacePromise: 'Design · quotidien · services · découvertes',
      login: 'Se connecter', register: 'Créer un compte', name: 'Nom', email: 'Adresse e-mail', password: 'Mot de passe', confirm: 'Confirmer le mot de passe', signIn: 'Se connecter', createAccount: 'Créer un compte', logout: 'Se déconnecter', signedIn: 'Connecté en tant que', accountNote: 'Connectez-vous avec votre compte marketplace.', loginRequired: 'Veuillez vous connecter pour continuer.', loginError: 'Connexion impossible. Vérifiez vos informations.', registerError: 'Inscription impossible. Vérifiez vos informations.', profile: 'Profil', save: 'Enregistrer', saved: 'Modifications enregistrées.', profileError: 'Impossible de modifier le profil.',
      validationError: 'Veuillez vérifier les informations saisies.', forbidden: 'Vous n’êtes pas autorisé à effectuer cette action.', notFound: 'L’élément demandé est introuvable.', conflict: 'Cette action ne peut pas être effectuée pour le moment.', rateLimited: 'Trop de requêtes. Veuillez patienter puis réessayer.',
      addCart: 'Ajouter au panier', sellerLabel: 'Vendeur', unavailable: 'Indisponible', cartEmpty: 'Votre panier est vide.', quantity: 'Quantité', remove: 'Supprimer', subtotal: 'Sous-total', checkout: 'Envoyer une demande impayée', checkoutNote: 'La demande reste impayée. Le stock est réservé pendant 30 minutes, puis libéré en cas d’annulation ou d’expiration. Aucun paiement n’est effectué.', orderPlaced: 'Demande impayée enregistrée ; le stock est réservé pendant 30 minutes.', orderHistory: 'Historique des commandes', paymentPending: 'Impayée', orderPending: 'En attente', noOrders: 'Vous n’avez pas encore de commande.', status: 'Statut', total: 'Total', date: 'Date', status_pending: 'En attente', status_requested: 'Demandée', status_processing: 'En cours', status_shipped: 'Expédiée', status_delivered: 'Livrée', status_cancelled: 'Annulée', status_payment_pending: 'Impayée', status_payment_paid: 'Payée',
      sellerTitle: 'Espace vendeur', onboarding: 'Créer un compte vendeur', storeName: 'Nom de la boutique', description: 'Description', onboard: 'Envoyer la demande', onboardingNote: 'L’approbation et les autorisations sont contrôlées par le serveur.', listings: 'Mes offres', addListing: 'Créer une offre', title: 'Titre', price: 'Prix', currency: 'Devise', stock: 'Stock', saveListing: 'Enregistrer l’offre', edit: 'Modifier', delete: 'Supprimer', uploadImages: 'Téléverser des images', sellerOrders: 'Commandes vendeur', noSellerListings: 'Aucune offre pour le moment.', noSellerOrders: 'Aucune commande vendeur.', typeLabel: 'Type', selectCategory: 'Choisir une catégorie', created: 'Offre créée.', updated: 'Offre modifiée.', deleted: 'Offre supprimée.', imageUploaded: 'Images téléversées.', onboarded: 'Demande envoyée.', updateOrder: 'Modifier l’article commandé',
      adminTitle: 'Administration', dashboard: 'Tableau de bord', pendingListings: 'Offres à examiner', pendingSellers: 'Demandes vendeur', sellerApplication: 'Demande vendeur', noPendingSellers: 'Aucune demande vendeur à examiner.', approve: 'Approuver', reject: 'Refuser', noPending: 'Aucune offre à examiner.', reviewError: 'Échec de la vérification.', serverAuth: 'Ces outils ne sont visibles que pour les rôles staff/admin reconnus. Le serveur doit vérifier chaque autorisation.', noAdmin: 'Un rôle staff ou admin est requis pour consulter cette page.', manageListings: 'Gérer les offres', adminSearch: 'Rechercher des offres', adminCreateListing: 'Nouvelle offre', selectSeller: 'Choisir un vendeur', listingStatus: 'Statut de l’offre', saveListing: 'Enregistrer l’offre', listingDeleteConfirm: 'Supprimer cette offre ?', page: 'Page', of: 'sur', nextPage: 'Suivant', noAdminListings: 'Aucune offre correspondante.', status_approved: 'Approuvée', status_pending_review: 'En attente de validation', status_rejected: 'Refusée', adminUsers: 'Gérer les utilisateurs', adminOrders: 'Suivi des commandes', adminCategories: 'Gérer les catégories', userRole: 'Rôle', saveRole: 'Enregistrer le rôle', roleUpdated: 'Rôle utilisateur mis à jour.', roleChangeConfirm: 'Accorder le rôle administrateur à ce compte ?', role_buyer: 'Acheteur', role_seller: 'Vendeur', role_staff: 'Équipe', role_admin: 'Administrateur', orderId: 'Commande', orderSearch: 'Rechercher des commandes', categoryName: 'Nom de catégorie', categorySlug: 'Slug', saveCategory: 'Enregistrer la catégorie', noAdminUsers: 'Aucun utilisateur trouvé.', noAdminOrders: 'Aucune commande trouvée.', noAdminCategories: 'Aucune catégorie trouvée.', confirmCategoryDelete: 'Supprimer cette catégorie ?', categoryImageReviewTitle: 'Revue des images de catégorie', categoryImageReviewDescription: 'Revue locale privée des images Unsplash recherchées. Une licence Unsplash ne garantit pas les droits sur les éléments représentés.', reviewPending: 'En attente', reviewApproved: 'Approuvée', reviewRejected: 'Rejetée', reviewStatus: 'Statut de vérification', reviewNote: 'Note de vérification', saveReview: 'Enregistrer', openUnsplash: 'Ouvrir la page Unsplash', imageUnavailable: 'Image indisponible', reviewLoadError: 'La revue des images n’a pas pu être chargée.', reviewSaved: 'Revue enregistrée.',
      brand: 'Marque', model: 'Modèle', sku: 'Référence', gtin: 'GTIN / code-barres', specifications: 'Caractéristiques', variantOptions: 'Notes de variantes', featuredProduct: 'À la une', hiddenProduct: 'Masqué de la boutique', hideProduct: 'Masquer', unhideProduct: 'Afficher', featureProduct: 'Mettre à la une', unfeatureProduct: 'Retirer de la une', imageRightsSource: 'Source / ayant droit de l’image', imageRightsLicense: 'Licence d’utilisation', setPrimary: 'Définir en couverture', replaceImage: 'Remplacer l’image', removeImage: 'Retirer l’image', gallery: 'Galerie produit', zoomImage: 'Agrandir l’image', close: 'Fermer', back: 'Retour', empty: 'Aucune donnée disponible.', requestFailed: 'La requête n’a pas abouti.',
      productUnavailable: 'Indisponible', productAvailable: 'Disponible', productDetails: 'Détails du produit', availableVariants: 'Déclinaisons disponibles', relatedProducts: 'Découvertes similaires', galleryIncomplete: 'Galerie ou droits d’image incomplets', duplicateReview: 'Vérification des doublons', quarantine: 'Mettre en attente de vérification', markDistinct: 'Confirmer comme produit distinct', archive: 'Archiver en sécurité', galleryViews: 'Vues produit', sourceNotVerified: 'Droits d’image non documentés', previousImage: 'Image précédente', nextImage: 'Image suivante', primaryImage: 'Image principale'
    }
  };
  Object.assign(words.de, { addresses: 'Adressen', defaultAddress: 'Standardadresse', recipient: 'Empfänger', streetAddress: 'Straße und Hausnummer', postalCode: 'Postleitzahl', city: 'Ort', billingAddress: 'Rechnungsadresse', deliveryAddress: 'Lieferadresse', addAddress: 'Adresse hinzufügen' });
  Object.assign(words.en, { addresses: 'Addresses', defaultAddress: 'Default address', recipient: 'Recipient', streetAddress: 'Street address', postalCode: 'Postcode', city: 'City', billingAddress: 'Billing address', deliveryAddress: 'Delivery address', addAddress: 'Add address' });
  Object.assign(words.fr, { addresses: 'Adresses', defaultAddress: 'Adresse par défaut', recipient: 'Destinataire', streetAddress: 'Adresse', postalCode: 'Code postal', city: 'Ville', billingAddress: 'Adresse de facturation', deliveryAddress: 'Adresse de livraison', addAddress: 'Ajouter une adresse' });
  Object.assign(words.de, { supplierName: 'Lieferantenname (vom Verkäufer angegeben)', supplierReference: 'Lieferanten-Artikelnummer', supplierDataNote: 'Lieferantendaten werden vom Verkäufer angegeben und geprüft; sie bestätigen keine verifizierte Lieferantenbeziehung.', importCsv: 'CSV-Produktimport', csvColumns: 'Spalten: title, category_id, type, description, price, stock; optional: currency, sku, gtin, brand, model_number, supplier_name, supplier_product_reference, specifications_json, variant_options_json. Lieferantendaten stammen vom Verkäufer. Importierte Angebote bleiben bis zur Freigabe unveröffentlicht.', row: 'Zeile', importedRows: 'importiert', failedRows: 'fehlerhaft' });
  Object.assign(words.en, { supplierName: 'Supplier name (seller supplied)', supplierReference: 'Supplier product reference', supplierDataNote: 'Supplier details are seller supplied and remain subject to review; they do not imply a verified supplier relationship.', importCsv: 'CSV product import', csvColumns: 'Columns: title, category_id, type, description, price, stock; optional: currency, sku, gtin, brand, model_number, supplier_name, supplier_product_reference, specifications_json, variant_options_json. Supplier details are seller supplied. Imported listings stay unpublished until approved.', row: 'Row', importedRows: 'imported', failedRows: 'failed' });
  Object.assign(words.fr, { supplierName: 'Nom du fournisseur (déclaré par le vendeur)', supplierReference: 'Référence produit du fournisseur', supplierDataNote: 'Les informations fournisseur sont déclarées par le vendeur et restent à vérifier ; elles ne prouvent pas une relation fournisseur vérifiée.', importCsv: 'Import de produits CSV', csvColumns: 'Colonnes : title, category_id, type, description, price, stock ; facultatives : currency, sku, gtin, brand, model_number, supplier_name, supplier_product_reference, specifications_json, variant_options_json. Les informations fournisseur sont déclarées par le vendeur. Les annonces importées restent non publiées jusqu’à approbation.', row: 'Ligne', importedRows: 'importés', failedRows: 'en erreur' });
  Object.assign(words.de, { forgotPassword: 'Passwort vergessen?', sendResetLink: 'Link zum Zurücksetzen senden', resetPassword: 'Passwort zurücksetzen', changePassword: 'Passwort ändern', currentPassword: 'Aktuelles Passwort', emailUnverified: 'E-Mail-Adresse noch nicht bestätigt.', sendVerification: 'Bestätigungs-E-Mail erneut senden', resetRequestSent: 'Falls das Konto existiert, werden Anweisungen gesendet.', passwordResetDone: 'Passwort aktualisiert. Bitte melde dich an.', passwordChanged: 'Passwort geändert. Andere Sitzungen wurden abgemeldet.', carrier: 'Versanddienstleister', trackingNumber: 'Sendungsnummer', trackingUrl: 'Tracking-Link', trackShipment: 'Sendung verfolgen' });
  Object.assign(words.en, { forgotPassword: 'Forgot password?', sendResetLink: 'Send reset link', resetPassword: 'Reset password', changePassword: 'Change password', currentPassword: 'Current password', emailUnverified: 'Email address is not verified yet.', sendVerification: 'Resend verification email', resetRequestSent: 'If the account exists, reset instructions will be sent.', passwordResetDone: 'Password updated. Please sign in.', passwordChanged: 'Password changed. Other sessions were signed out.', carrier: 'Carrier', trackingNumber: 'Tracking number', trackingUrl: 'Tracking URL', trackShipment: 'Track shipment' });
  Object.assign(words.fr, { forgotPassword: 'Mot de passe oublié ?', sendResetLink: 'Envoyer le lien de réinitialisation', resetPassword: 'Réinitialiser le mot de passe', changePassword: 'Changer le mot de passe', currentPassword: 'Mot de passe actuel', emailUnverified: 'Adresse e-mail non vérifiée.', sendVerification: 'Renvoyer l’e-mail de vérification', resetRequestSent: 'Si le compte existe, les instructions seront envoyées.', passwordResetDone: 'Mot de passe modifié. Veuillez vous connecter.', passwordChanged: 'Mot de passe modifié. Les autres sessions sont déconnectées.', carrier: 'Transporteur', trackingNumber: 'Numéro de suivi', trackingUrl: 'Lien de suivi', trackShipment: 'Suivre le colis' });
  Object.assign(words.de, { shippingMethod: 'Versandart', shippingTotal: 'Versandkosten', days: 'Tage', checkoutConfigRequired: 'Für diesen Warenkorb fehlen eine gespeicherte Adresse oder konfigurierte Versandkosten.' });
  Object.assign(words.en, { shippingMethod: 'Shipping method', shippingTotal: 'Shipping', days: 'days', checkoutConfigRequired: 'A saved address or configured shipping rate is missing for this cart.' });
  Object.assign(words.fr, { shippingMethod: 'Mode de livraison', shippingTotal: 'Livraison', days: 'jours', checkoutConfigRequired: 'Une adresse enregistrée ou un tarif de livraison configuré manque pour ce panier.' });
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
    token: storedToken, user: null, page: new URLSearchParams(location.search).has('reset-token') ? 'reset-password' : 'store', resetToken: new URLSearchParams(location.search).get('reset-token') || '', resetEmail: new URLSearchParams(location.search).get('reset-email') || '', categories: [], listings: [], listingsPagination: {}, catalogPage: 1, demoCatalog: [], demoPagination: {}, demoPage: 1, demoLoading: false, demoError: null, listing: null, slide: 0, zoomOpen: false, cart: null, orderNotice: '', activeOrder: null,
    orders: [], addresses: [], buyerWishlist: [], buyerReturns: [], notifications: [], emailDeliveryAvailable: false, paymentReadiness: null, adminSettings: null, adminReconciliation: [], sellerReturns: [], adminShippingMethods: [], adminReturns: [], adminRefunds: [], checkoutOptions: null, checkoutQuote: null, checkoutSelections: { shipping_methods: {} }, checkoutError: '', sellerListings: [], sellerOrders: [], sellerStats: {}, adminDashboard: null, adminListings: [], adminSellers: [], adminPagination: {}, adminQuery: '', adminStatus: '', adminType: '', adminCategory: '', adminListingEdit: null, adminUsers: [], adminUsersPagination: {}, adminUsersQuery: '', adminOrders: [], adminOrdersPagination: {}, adminOrdersQuery: '', adminCategories: [], adminCategoryEdit: null, adminDemoProducts: [], adminDemoPagination: {}, adminDemoPage: 1, adminDemoError: null, pendingListings: [], pendingSellers: [],
    categoryImageReviewCandidates: [], categoryImageReviewSummary: { total: 0, pending: 0, approved: 0, rejected: 0 }, categoryImageReviewError: null,
    category: '', type: '', sort: 'newest', query: '', loading: false, error: '', catalogErrors: { categories: null, listings: null }, authMode: 'login', listingEdit: null,
    heroSlide: 0, heroPaused: false, wishlist: storedWishlist, wishlistOnly: false
  };
  const demoWords = {
    de: { demoCatalog: 'Katalog-Demonstrationen', demoIntro: 'Illustrative Beispiele zum Durchsehen. Keine echten Angebote; nicht käuflich.', demoBadge: 'KATALOGDEMO', demoNotForSale: 'Illustration · nicht käuflich', demoCardNote: 'Fiktives Muster · nicht käuflich', demoUnavailable: 'Demokatalog nicht verfügbar.', demoEmpty: 'Für diese Auswahl gibt es keine Katalogdemonstrationen.', adminDemoCatalog: 'Katalogdemonstrationen verwalten', showDemo: 'Auf der Startseite zeigen', hideDemo: 'Von der Startseite entfernen', showHomepage: 'Auf der Startseite zeigen', removeHomepage: 'Von der Startseite entfernen', demoDeleted: 'Demonstration archiviert.', demoDeleteConfirm: 'Diese Katalogdemonstration archivieren?', demoVisibilitySaved: 'Sichtbarkeit aktualisiert.', demoLogin: 'Demo-Zugang', demoSeller: 'Demo-Verkäufer', demoAdmin: 'Demo-Administration', demoSwitch: 'Demo-Rolle wechseln', demoDataNote: 'Lokale Beispieldaten. Preise und Bestände sind fiktiv; Zahlung bleibt offen.', demoListingDetails: 'Demo-Angebot · Preis und Bestand sind fiktiv. Es gibt keinen echten Kauf oder eine echte Zahlung.', demoSellerFulfillment: 'Demo-Ablauf · keine echte Lieferung oder Zahlung.', sort: 'Sortieren', newest: 'Neueste', priceLow: 'Preis aufsteigend', priceHigh: 'Preis absteigend', titleSort: 'Name A–Z', orderDetails: 'Bestelldetails', cancelOrder: 'Unbezahlte Anfrage stornieren', cancelConfirm: 'Diese Demo-Anfrage stornieren und reservierten Bestand freigeben?', orderDemo: 'Demo-Bestellung', reservationUntil: 'Bestand reserviert bis', unavailableCart: 'Nicht verfügbar', removeUnavailable: 'Nicht verfügbare Position entfernen', cartTotal: 'Gesamtbetrag', currencyMismatch: 'Unterschiedliche Währungen: Bestellungen müssen einheitlich sein.', stockReserved: 'Musterbestand ist 30 Minuten reserviert.', demoStats: 'Demo-Statistik' },
    en: { demoCatalog: 'Catalogue demonstrations', demoIntro: 'Illustrative examples to explore. These are not real offers and cannot be purchased.', demoBadge: 'CATALOGUE DEMO', demoNotForSale: 'Illustration · not for sale', demoCardNote: 'Fictional sample · cannot be purchased', demoUnavailable: 'The demonstration catalogue is unavailable.', demoEmpty: 'There are no catalogue demonstrations for this selection.', adminDemoCatalog: 'Manage catalogue demonstrations', showDemo: 'Show on homepage', hideDemo: 'Remove from homepage', showHomepage: 'Show on homepage', removeHomepage: 'Remove from homepage', demoDeleted: 'Demonstration archived.', demoDeleteConfirm: 'Archive this catalogue demonstration?', demoVisibilitySaved: 'Homepage visibility updated.', demoLogin: 'Demo access', demoSeller: 'Demo seller', demoAdmin: 'Demo administrator', demoSwitch: 'Switch demo role', demoDataNote: 'Local demonstration data. Prices and stock are fictional; payment remains pending.', demoListingDetails: 'Demonstration listing · price and stock are fictional. No real purchase or payment is made.', demoSellerFulfillment: 'Demonstration workflow · no real shipment or payment.', sort: 'Sort by', newest: 'Newest', priceLow: 'Price: low to high', priceHigh: 'Price: high to low', titleSort: 'Name A–Z', orderDetails: 'Order details', cancelOrder: 'Cancel unpaid request', cancelConfirm: 'Cancel this demo request and release its reserved stock?', orderDemo: 'Demo order', reservationUntil: 'Stock reserved until', unavailableCart: 'Unavailable', removeUnavailable: 'Remove unavailable item', cartTotal: 'Total', currencyMismatch: 'Mixed currencies: all order items must use one currency.', stockReserved: 'Sample stock is reserved for 30 minutes.', demoStats: 'Demo statistics' },
    fr: { demoCatalog: 'Démonstrations du catalogue', demoIntro: 'Exemples illustrés à découvrir. Ce ne sont pas des offres réelles et ils ne sont pas achetables.', demoBadge: 'DÉMO CATALOGUE', demoNotForSale: 'Illustration · non disponible à la vente', demoCardNote: 'Exemple fictif · non achetable', demoUnavailable: 'Le catalogue de démonstration est indisponible.', demoEmpty: 'Aucune démonstration de catalogue pour cette sélection.', adminDemoCatalog: 'Gérer les démonstrations du catalogue', showDemo: 'Afficher sur l’accueil', hideDemo: 'Retirer de l’accueil', showHomepage: 'Afficher sur l’accueil', removeHomepage: 'Retirer de l’accueil', demoDeleted: 'Démonstration archivée.', demoDeleteConfirm: 'Archiver cette démonstration du catalogue ?', demoVisibilitySaved: 'Visibilité de l’accueil mise à jour.', demoLogin: 'Accès démo', demoSeller: 'Vendeur démo', demoAdmin: 'Administration démo', demoSwitch: 'Changer de rôle démo', demoDataNote: 'Données locales de démonstration. Prix et stock fictifs ; paiement en attente.', demoListingDetails: 'Offre de démonstration · le prix et le stock sont fictifs. Aucun achat ni paiement réel.', demoSellerFulfillment: 'Parcours de démonstration · aucune livraison ni paiement réel.', sort: 'Trier', newest: 'Plus récents', priceLow: 'Prix croissant', priceHigh: 'Prix décroissant', titleSort: 'Nom A–Z', orderDetails: 'Détails de la commande', cancelOrder: 'Annuler la demande impayée', cancelConfirm: 'Annuler cette demande démo et libérer le stock réservé ?', orderDemo: 'Commande démo', reservationUntil: 'Stock réservé jusqu’au', unavailableCart: 'Indisponible', removeUnavailable: 'Retirer l’article indisponible', cartTotal: 'Total', currencyMismatch: 'Devises différentes : une commande doit utiliser une seule devise.', stockReserved: 'Le stock de démonstration est réservé pendant 30 minutes.', demoStats: 'Statistiques démo' }
  };
  const workflowWords = {
    de: { notifications: 'Benachrichtigungen', emailDelivery: 'E-Mail-Versand', emailUnavailable: 'nicht verfügbar; In-App-Benachrichtigungen bleiben verfügbar', noNotifications: 'Keine Benachrichtigungen.', markRead: 'Als gelesen markieren', orderTimeline: 'Bestellstatus-Verlauf', noStatusHistory: 'Noch keine Statusänderungen erfasst.', deliveryOptions: 'Lieferoptionen', deliveryEstimate: 'Schätzung', requestReturn: 'Rückgabe beantragen', returnReason: 'Rückgabegrund', returnStatus: 'Rückgabestatus', shippingConfig: 'Versand konfigurieren', shippingConfigNote: 'Nur vom Unternehmen bestätigte Versandpreise und Lieferzeiträume eintragen.', sellerId: 'Verkäufer-ID', shippingMethodName: 'Versandart', shippingFee: 'Gebühr (EUR)', minimumDays: 'Mindestdauer (Tage)', maximumDays: 'Höchstdauer (Tage)', saveShipping: 'Versandart speichern', disable: 'Deaktivieren', returnOversight: 'Rückgaben und Erstattungen', refundRecords: 'Erstattungsdatensätze (Zahlungsanbieter separat)', noReturns: 'Keine Rückgaben.', noRefunds: 'Keine Erstattungen.', statusUpdate: 'Status ändern', selectStatus: 'Status auswählen', updateStatus: 'Status aktualisieren', cancelConfirm: 'Diese unbezahlte Bestellanfrage stornieren und reservierten Bestand freigeben?', paySecurely: 'Sicher bezahlen', paymentUnavailable: 'Zahlung ist noch nicht aktiviert; die Bestellung bleibt unbezahlt.' },
    en: { notifications: 'Notifications', emailDelivery: 'Email delivery', emailUnavailable: 'unavailable; in-app notifications remain available', noNotifications: 'No notifications.', markRead: 'Mark read', orderTimeline: 'Order status history', noStatusHistory: 'No status changes recorded.', deliveryOptions: 'Delivery options', deliveryEstimate: 'estimate', requestReturn: 'Request return', returnReason: 'Return reason', returnStatus: 'Return status', shippingConfig: 'Shipping configuration', shippingConfigNote: 'Enter rates and delivery estimates confirmed by the business. A shipping method must be assigned to one seller.', sellerId: 'Seller ID', shippingMethodName: 'Shipping method', shippingFee: 'Fee (EUR)', minimumDays: 'Minimum days', maximumDays: 'Maximum days', saveShipping: 'Save shipping method', disable: 'Disable', returnOversight: 'Returns and refund oversight', refundRecords: 'Refund records (provider processing separate)', noReturns: 'No returns.', noRefunds: 'No refund records.', statusUpdate: 'Transition', selectStatus: 'Select status', updateStatus: 'Update status', cancelConfirm: 'Cancel this unpaid order request and release its reserved stock?', paySecurely: 'Pay securely', paymentUnavailable: 'Payment is not enabled; this order remains unpaid.' },
    fr: { notifications: 'Notifications', emailDelivery: 'Envoi des e-mails', emailUnavailable: 'indisponible ; les notifications dans l’application restent disponibles', noNotifications: 'Aucune notification.', markRead: 'Marquer comme lu', orderTimeline: 'Historique des statuts de commande', noStatusHistory: 'Aucun changement de statut enregistré.', deliveryOptions: 'Options de livraison', deliveryEstimate: 'estimation', requestReturn: 'Demander un retour', returnReason: 'Motif du retour', returnStatus: 'Statut du retour', shippingConfig: 'Configuration de la livraison', shippingConfigNote: 'Saisissez uniquement les tarifs et délais confirmés par l’entreprise. Une méthode doit être attribuée à un vendeur.', sellerId: 'ID du vendeur', shippingMethodName: 'Mode de livraison', shippingFee: 'Frais (EUR)', minimumDays: 'Minimum (jours)', maximumDays: 'Maximum (jours)', saveShipping: 'Enregistrer le mode', disable: 'Désactiver', returnOversight: 'Retours et remboursements', refundRecords: 'Remboursements (traitement fournisseur séparé)', noReturns: 'Aucun retour.', noRefunds: 'Aucun remboursement.', statusUpdate: 'Transition', selectStatus: 'Choisir le statut', updateStatus: 'Mettre à jour', cancelConfirm: 'Annuler cette demande impayée et libérer le stock réservé ?', paySecurely: 'Payer en toute sécurité', paymentUnavailable: 'Le paiement n’est pas activé ; cette commande reste impayée.' }
  };
  const t = (key) => (words[state.lang] || words.de)[key] || workflowWords[state.lang]?.[key] || workflowWords.en[key] || demoWords[state.lang]?.[key] || demoWords.en[key] || key;
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
  const categoryImageUrl = (id) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=500&q=68`;
  const displayStatus = (value) => {
    const key = `status_${String(value || 'pending').toLowerCase()}`;
    return t(key) === key ? String(value || '') : t(key);
  };
  const esc = (value) => String(value ?? '').replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);
  const messageKeyForStatus = (status) => status === 401 ? 'loginRequired'
    : status === 403 ? 'forbidden'
      : status === 404 ? 'notFound'
        : status === 409 ? 'conflict'
          : status === 422 ? 'validationError'
            : status === 429 ? 'rateLimited'
              : status >= 500 ? 'catalogUnavailable' : 'requestFailed';
  const api = window.MarketplaceApiClient.create({
    baseUrl: API_BASE,
    getToken: () => state.token,
    messageForStatus: (status) => t(messageKeyForStatus(status)),
    networkMessage: t('catalogUnavailable'),
    timeoutMessage: t('catalogUnavailable'),
    onUnauthorized: () => {
      state.token = null;
      state.user = null;
      state.cart = null;
      state.orders = [];
      try { sessionStorage.removeItem('mp-token'); } catch {}
    }
  });
  const safeApiMessage = (error, fallback = 'serviceUnavailable') => error?.validationErrors
    ? t('validationError')
    : error?.status ? t(messageKeyForStatus(error.status)) : t(fallback);
  const validationMessage = (error) => safeApiMessage(error);
  const roleNames = () => {
    const normalizeRole = (role) => typeof role === 'string'
      ? [role]
      : [role?.name, role?.slug, role?.value, role?.role].filter(Boolean);
    const roles = [
      ...normalizeRole(state.user?.role),
      state.user?.account_type,
      state.user?.type,
      ...(Array.isArray(state.user?.roles) ? state.user.roles.flatMap(normalizeRole) : [])
    ];
    return roles.filter(Boolean).map((role) => String(role).toLowerCase());
  };
  const isSeller = () => roleNames().includes('seller');
  const isAdmin = () => roleNames().some((role) => ['admin', 'staff'].includes(role));
  const isAdministrator = () => roleNames().includes('admin');
  const isLocalDevelopment = () => ['localhost', '127.0.0.1', '::1'].includes(String(window.location.hostname).toLowerCase());
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
  const retryButton = (action) => `<button class="text-button api-retry" type="button" data-action="${action}">${esc(t('retry'))}</button>`;
  const actionButton = (label, action, extra = '') => `<button class="button-dark btn btn-primary" type="button" data-action="${action}" ${extra}>${esc(label)}</button>`;
  const roleLinks = () => `${state.token ? `<button class="nav-link" data-page="seller">${t('seller')}</button>` : ''}${isAdmin() ? `<button class="nav-link" data-page="admin">${t('admin')}</button>` : ''}${window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1' ? `<select class="demo-role-switch" aria-label="${esc(t('demoSwitch'))}" data-demo-role><option value="">${esc(t('demoSwitch'))}</option><option value="buyer">${esc(t('demoLogin'))}</option><option value="seller">${esc(t('demoSeller'))}</option><option value="admin">${esc(t('demoAdmin'))}</option></select>` : ''}`;

  function shell() {
    document.documentElement.lang = state.lang;
    document.documentElement.dataset.theme = state.theme;
    document.documentElement.dataset.bsTheme = state.theme;
    document.title = BRAND_NAME;
    document.getElementById('app').innerHTML = `
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
      <footer class="market-footer"><div class="footer-brand"><span class="brand-crest" aria-hidden="true">${esc(BRAND_NAME.slice(0, 1).toUpperCase())}</span><div><strong>${esc(BRAND_NAME)}</strong><small>${esc(t('marketplacePromise'))}</small></div></div><nav aria-label="${esc(t('categories'))}"><button data-scroll="fashion-categories">${esc(t('categories'))}</button><button data-scroll="catalog">${esc(t('discover'))}</button><button data-page="seller">${esc(t('seller'))}</button></nav><span class="footer-launch">${esc(t('heroKicker'))}</span><span>© ${new Date().getFullYear()}</span></footer>`;
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
    const gallery = Array.isArray(listing.image_gallery) ? listing.image_gallery : [];
    const primaryGalleryImage = gallery.find((photo) => photo?.is_primary && photo.url)?.url;
    const galleryImage = primaryGalleryImage || gallery.find((photo) => photo?.url)?.url;
    const imageCandidates = [galleryImage, ...(Array.isArray(listing.images) ? listing.images : [])];
    const src = imageCandidates.map(imageUrl).find(Boolean) || '';
    const fallback = `<div class="listing-image-fallback" ${src ? 'hidden' : ''} role="img" aria-label="${esc(t('imageUnavailable'))}"><i class="fa-regular fa-image" aria-hidden="true"></i><span>${esc(t('imageUnavailable'))}</span></div>`;
    return `<div class="listing-media ${esc(cls)}" aria-label="${esc(listing.title || '')}">${src ? `<img class="listing-image" src="${esc(src)}" alt="${esc(listing.title || '')}" loading="lazy" decoding="async" onerror="this.hidden=true;this.nextElementSibling.hidden=false">` : ''}${fallback}</div>`;
  }
  function listingCard(listing) {
    const cat = listing.category?.name || '';
    const favorite = state.wishlist.includes(String(listing.id));
    const isService = String(listing.type || '').toLowerCase() === 'service';
    const availability = isService ? t('service') : Number(listing.stock) > 0 ? t('productAvailable') : t('productUnavailable');
    return `<article class="listing-card">
      <button class="listing-wishlist ${favorite ? 'is-saved' : ''}" type="button" data-wishlist="${esc(listing.id)}" aria-label="${esc(t(favorite ? 'unfavorite' : 'favorite'))}" aria-pressed="${favorite}"><i class="${favorite ? 'fa-solid' : 'fa-regular'} fa-heart" aria-hidden="true"></i></button>
      <button class="listing-visual" data-detail="${esc(listing.slug || listing.id)}" aria-label="${esc(t('view'))}: ${esc(listing.title)}">${image(listing)}<span>${esc(cat)}</span></button>
      <div class="listing-card-copy"><small>${listing.is_demo ? `<span class="demo-listing-label">${esc(t('demoBadge'))}</span> · ` : ''}${esc(listing.seller?.name || '')}</small><h3><button data-detail="${esc(listing.slug || listing.id)}">${esc(listing.title)}</button></h3>
        <p>${esc(listing.description || '')}</p><div class="listing-card-meta"><span class="listing-availability">${esc(availability)}</span><strong>${money(listing.price, listing.currency)}</strong></div>
      </div></article>`;
  }
  function demoProductCard(product) {
    const fallback = `<div class="demo-image-fallback" hidden aria-hidden="true"><i class="fa-regular fa-image"></i><span>${esc(t('demoBadge'))}</span></div>`;
    const image = product.image_url
      ? `<img class="demo-product-image" src="${esc(imageUrl(product.image_url))}" alt="${esc(product.title)} — ${esc(t('demoBadge'))}" loading="lazy" decoding="async" onerror="this.hidden=true;this.nextElementSibling.hidden=false">${fallback}`
      : fallback;
    return `<article class="listing-card demo-listing-card"><div class="demo-product-media">${image}<span class="demo-product-badge">${esc(t('demoBadge'))}</span></div><div class="listing-card-copy demo-product-copy"><small>${esc(product.category?.name || '')} · ${esc(t('demoNotForSale'))}</small><h3>${esc(product.title)}</h3><p>${esc(product.description || '')}</p><span class="demo-product-label"><i class="fa-solid fa-circle-info" aria-hidden="true"></i> ${esc(t('demoCardNote'))}</span></div></article>`;
  }
  const catalogErrorLabels = {
    de: { categories: 'Kategorien konnten nicht geladen werden.', listings: 'Angebote konnten nicht geladen werden.' },
    en: { categories: 'Categories could not be loaded.', listings: 'Listings could not be loaded.' },
    fr: { categories: 'Les catégories n’ont pas pu être chargées.', listings: 'Les offres n’ont pas pu être chargées.' }
  };
  const catalogErrorLabel = (section) => catalogErrorLabels[state.lang]?.[section] || catalogErrorLabels.en[section];
  function loadingState() { return `<div class="state-message" role="status"><span class="spinner-border spinner-border-sm" aria-hidden="true"></span> ${esc(t('loading'))}</div>`; }
  function errorState() { return `<div class="state-message catalog-error" role="status"><p>${esc(safeApiMessage(state.error, 'catalogUnavailable'))}</p>${retryButton('retry-catalog')}</div>`; }
  function storePage() {
    const pageInfo = state.listingsPagination;
    const catalogPages = Number(pageInfo.last_page) > 1 ? `<nav class="admin-pagination" aria-label="${esc(t('latest'))}"><button class="text-button" data-action="catalog-page" data-page="${Math.max(1, Number(pageInfo.current_page) - 1)}" ${Number(pageInfo.current_page) <= 1 ? 'disabled' : ''}>← ${esc(t('back'))}</button><span>${esc(t('page'))} ${Number(pageInfo.current_page)} ${esc(t('of'))} ${Number(pageInfo.last_page)}</span><button class="text-button" data-action="catalog-page" data-page="${Math.min(Number(pageInfo.last_page), Number(pageInfo.current_page) + 1)}" ${Number(pageInfo.current_page) >= Number(pageInfo.last_page) ? 'disabled' : ''}>${esc(t('nextPage'))} →</button></nav>` : '';
    const result = state.loading ? loadingState() : state.catalogErrors.listings ? `<div class="state-message catalog-error" role="status"><p>${esc(catalogErrorLabel('listings'))} ${esc(safeApiMessage(state.catalogErrors.listings, 'catalogUnavailable'))}</p>${retryButton('retry-catalog')}</div>` : state.listings.length ? `<div class="listing-grid">${state.listings.map(listingCard).join('')}</div>${catalogPages}` : `<p class="state-message">${esc(t('noListings'))}</p>`;
    const demoPage = state.demoPagination;
    const demoPages = Number(demoPage.last_page) > 1 ? `<nav class="admin-pagination" aria-label="${esc(t('demoCatalog'))}"><button class="text-button" data-action="demo-catalog-page" data-page="${Math.max(1, Number(demoPage.current_page) - 1)}" ${Number(demoPage.current_page) <= 1 ? 'disabled' : ''}>← ${esc(t('back'))}</button><span>${esc(t('page'))} ${Number(demoPage.current_page)} ${esc(t('of'))} ${Number(demoPage.last_page)}</span><button class="text-button" data-action="demo-catalog-page" data-page="${Math.min(Number(demoPage.last_page), Number(demoPage.current_page) + 1)}" ${Number(demoPage.current_page) >= Number(demoPage.last_page) ? 'disabled' : ''}>${esc(t('nextPage'))} →</button></nav>` : '';
    const demoResult = state.demoLoading ? loadingState() : state.demoError ? `<div class="state-message catalog-error" role="status"><p>${esc(t('demoUnavailable'))} ${esc(safeApiMessage(state.demoError, 'catalogUnavailable'))}</p><button class="text-button" data-action="retry-catalog">${esc(t('retry'))}</button></div>` : state.demoCatalog.length ? `<div class="demo-catalog-grid">${state.demoCatalog.map(demoProductCard).join('')}</div>${demoPages}` : `<p class="state-message">${esc(t('demoEmpty'))}</p>`;
    const availableProducts = state.listings.filter((listing) => String(listing.type || '').toLowerCase() === 'product');
    const childTerms = /child|children|kids|baby|infant|toy|spielzeug|kinder|bébé|enfant|jouet/i;
    const childCategories = state.categories.filter((category) => childTerms.test(`${category.name} ${category.slug}`))
      .sort((a, b) => Number(/baby|maternity|bébé/i.test(`${a.name} ${a.slug}`)) - Number(/baby|maternity|bébé/i.test(`${b.name} ${b.slug}`)));
    const isChildrenListing = (listing) => childTerms.test(`${listing.category?.name || ''} ${listing.category?.slug || ''}`);
    const featuredProducts = availableProducts
      .filter((listing) => !state.wishlistOnly || state.wishlist.includes(String(listing.id)))
      .sort((a, b) => Number(isChildrenListing(b)) - Number(isChildrenListing(a)))
      .slice(0, 6);
    const featuredContent = state.loading ? loadingState()
      : state.catalogErrors.listings ? ''
        : featuredProducts.length ? `<div class="featured-grid">${featuredProducts.map(listingCard).join('')}</div>`
          : `<p class="featured-empty">${esc(state.wishlistOnly ? t('wishlistEmpty') : t('noListings'))}</p>`;
    const categoryIcon = (category) => {
      const value = `${category.name} ${category.slug}`.toLowerCase();
      if (/child|baby|infant|toy|spielzeug|kinder|bébé|enfant/.test(value)) return 'fa-solid fa-child-reaching';
      if (/architecture|architect|design|interior|home|house|wohnen|maison|bau/.test(value)) return 'fa-solid fa-house';
      if (/account|finance|professional|legal|consult|service|steuer|comptab/.test(value)) return 'fa-solid fa-briefcase';
      if (/flight|travel|ticket|flug|voyage/.test(value)) return 'fa-solid fa-plane';
      if (/sport|fitness|outdoor/.test(value)) return 'fa-solid fa-person-running';
      if (/agri|farm|garden|landwirtschaft|jardin/.test(value)) return 'fa-solid fa-seedling';
      if (/fashion|dress|clothing|mode|vêtement/.test(value)) return 'fa-solid fa-shirt';
      if (/car|auto|vehicle|motor/.test(value)) return 'fa-solid fa-car';
      if (/elect|tech|computer/.test(value)) return 'fa-solid fa-laptop';
      return 'fa-solid fa-bag-shopping';
    };
    const priority = (category) => /children|toys|kinder|jouet/i.test(`${category.name} ${category.slug}`) ? 0
      : /baby|maternity|bébé|matern/i.test(`${category.name} ${category.slug}`) ? 1
        : /^fashion$|fashion|mode/i.test(`${category.name} ${category.slug}`) ? 2 : 3;
    const categoryTiles = [...state.categories].sort((a, b) => priority(a) - priority(b) || a.name.localeCompare(b.name)).slice(0, 30);
    return `<section class="market-hero" aria-label="${esc(t('fashionCategories'))}">
        <div class="hero-slides" aria-hidden="true">${heroSlides.map((slide, index) => `<div class="hero-slide ${index === state.heroSlide ? 'is-active' : ''}" data-hero-slide="${index}" aria-hidden="${index !== state.heroSlide}"><img src="${heroImageUrl(slide)}" alt="" loading="${index === state.heroSlide ? 'eager' : 'lazy'}" decoding="async" fetchpriority="${index === state.heroSlide ? 'high' : 'low'}" style="object-position:${slide.position}"></div>`).join('')}</div>
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
      <section class="category-editorial" id="fashion-categories" aria-label="${esc(t('categories'))}"><div class="category-editorial-head"><div><span class="overline">${esc(t('heroKicker'))}</span><h2>${esc(t('all'))}</h2></div><span>${String(categoryTiles.length).padStart(2, '0')} <i class="fa-solid fa-arrow-right" aria-hidden="true"></i></span></div><div class="fashion-category-grid">${categoryTiles.map((category, index) => `<button class="fashion-category" type="button" data-category="${esc(category.id)}" aria-label="${esc(category.name)}${Number(category.listing_count) ? `, ${Number(category.listing_count)}` : ''}"><img class="category-photo" src="${categoryImageUrl(categoryImageIds[index % categoryImageIds.length])}" alt="" loading="lazy" decoding="async"><span class="fashion-category-shade"></span><span class="fashion-category-number">${String(index + 1).padStart(2, '0')}</span><i class="${categoryIcon(category)}" aria-hidden="true"></i><span class="fashion-category-name">${esc(category.name)}</span><span class="fashion-category-count">${Number(category.listing_count) || 0}</span><span class="fashion-category-arrow" aria-hidden="true">↗</span></button>`).join('')}</div></section>
      ${childCategories.length ? `<section class="children-edit"><div class="children-edit-copy"><span class="overline">${esc(t('childrenEdit'))}</span><h2>${esc(t('childrenIntro'))}</h2><p>${esc(t('marketplacePromise'))}</p><div class="children-category-links">${childCategories.map((category) => `<button data-category="${esc(category.id)}">${esc(category.name)} <span aria-hidden="true">↗</span></button>`).join('')}</div><button class="children-cta" data-category="${esc(childCategories[0].id)}">${esc(t('browseChildren'))}<span aria-hidden="true">↗</span></button></div><div class="children-edit-image" role="img" aria-label="${esc(t('childrenEdit'))}"></div></section>` : ''}
      <section class="featured-section" id="featured-picks"><div class="featured-heading"><div><span class="overline">${esc(t('latest'))}</span><h2>${esc(t(state.wishlistOnly ? 'wishlist' : 'featured'))}</h2></div>${state.wishlistOnly ? `<button class="featured-all" data-show-all-featured>${esc(t('viewAll'))}<span aria-hidden="true">↗</span></button>` : `<button class="featured-all" data-scroll="catalog">${esc(t('viewAll'))}<span aria-hidden="true">↗</span></button>`}</div>${featuredContent}</section>
      <section class="market-section category-section"><div class="section-heading"><span class="overline">${esc(t('categories'))}</span><h2>${esc(t('all'))}</h2></div>
        ${state.catalogErrors.categories ? `<div class="state-message catalog-error" role="status"><p>${esc(catalogErrorLabel('categories'))} ${esc(safeApiMessage(state.catalogErrors.categories, 'catalogUnavailable'))}</p>${retryButton('retry-catalog')}</div>` : ''}
        ${state.loading ? loadingState() : state.categories.length ? `<div class="category-pills"><button class="${!state.category ? 'selected' : ''}" data-category="">${esc(t('all'))}</button>${categoryTiles.map((category) => `<button class="${String(category.id) === state.category ? 'selected' : ''}" data-category="${esc(category.id)}">${esc(category.name)} <small>${Number(category.listing_count) || 0}</small></button>`).join('')}</div>` : state.catalogErrors.categories ? '' : `<p>${esc(t('noCategories'))}</p>`}
      </section><section class="market-section catalog-section" id="catalog"><div class="section-heading section-heading-row"><div><span class="overline">${esc(t('latest'))}</span><h2>${esc(t('discover'))}</h2></div><div class="catalog-filters"><label>${esc(t('type'))}<select data-filter="type"><option value="">${esc(t('allTypes'))}</option><option value="product" ${state.type === 'product' ? 'selected' : ''}>${esc(t('product'))}</option><option value="service" ${state.type === 'service' ? 'selected' : ''}>${esc(t('service'))}</option></select></label><label>${esc(t('sort'))}<select data-filter="sort"><option value="newest" ${state.sort === 'newest' ? 'selected' : ''}>${esc(t('newest'))}</option><option value="price_asc" ${state.sort === 'price_asc' ? 'selected' : ''}>${esc(t('priceLow'))}</option><option value="price_desc" ${state.sort === 'price_desc' ? 'selected' : ''}>${esc(t('priceHigh'))}</option><option value="title_asc" ${state.sort === 'title_asc' ? 'selected' : ''}>${esc(t('titleSort'))}</option></select></label></div></div>${result}</section><section class="market-section demo-catalog-section" id="catalog-demonstrations"><div class="section-heading"><span class="overline">${esc(t('demoBadge'))}</span><h2>${esc(t('demoCatalog'))}</h2><p class="demo-catalog-intro">${esc(t('demoIntro'))}</p></div>${demoResult}</section>`;
  }
  function detailPage() {
    const listing = state.listing;
    if (state.loading) return `<section class="market-section">${loadingState()}</section>`;
    if (state.error || !listing) return `<section class="market-section">${alertBox(safeApiMessage(state.error, 'catalogUnavailable'))}<button class="text-button" data-page="store">← ${esc(t('back'))}</button></section>`;
    const gallery = Array.isArray(listing.image_gallery) ? listing.image_gallery.filter((photo) => photo && typeof photo.url === 'string' && photo.url) : [];
    const pics = gallery.length ? gallery.map((photo) => photo.url) : (Array.isArray(listing.images) ? listing.images.map(imageUrl).filter(Boolean) : []);
    const imageMeta = gallery[state.slide % Math.max(gallery.length, 1)];
    const specifications = listing.specifications && typeof listing.specifications === 'object' ? Object.entries(listing.specifications) : [];
    const variantNotes = Array.isArray(listing.variant_options) ? listing.variant_options : [];
    const related = state.listings.filter((item) => String(item.id) !== String(listing.id)
      && (!listing.category?.id || String(item.category?.id) === String(listing.category.id))).slice(0, 4);
    return `<section class="market-section detail-page"><button class="text-button mb-4" data-page="store">← ${esc(t('back'))}</button><div class="detail-grid">
      <div class="gallery">${pics.length ? `<div class="gallery-main"><button type="button" class="gallery-zoom-trigger" data-action="zoom-open" aria-label="${esc(t('zoomImage'))}">${image({ images: [pics[state.slide % pics.length]], title: imageMeta?.alt_text || listing.title })}<span><i class="fa-solid fa-expand" aria-hidden="true"></i> ${esc(t('zoomImage'))}</span></button><div class="gallery-controls"><button type="button" data-action="slide" data-delta="-1" aria-label="${esc(t('previousImage'))}">←</button><button type="button" data-action="slide" data-delta="1" aria-label="${esc(t('nextImage'))}">→</button></div></div><div class="gallery-thumbs" aria-label="${esc(t('gallery'))}">${pics.map((src, index) => `<button class="${index === state.slide ? 'active' : ''}" type="button" data-action="slide-to" data-index="${index}" aria-label="${esc(t('galleryViews'))} ${index + 1}" aria-pressed="${index === state.slide}"><img src="${esc(src)}" alt="${esc(gallery[index]?.alt_text || listing.title)}" loading="lazy" decoding="async"></button>`).join('')}</div><p class="gallery-counter">${esc(t('galleryViews'))} · ${state.slide + 1} / ${pics.length}</p>` : `<div class="listing-image-empty detail-empty"><span>${esc(t('noListings'))}</span></div>`}</div>
      <div class="detail-copy"><span class="overline">${esc(listing.category?.name || '')}${listing.is_featured ? ` · ${esc(t('featured'))}` : ''}</span><h1>${esc(listing.title)}</h1><strong class="detail-price">${money(listing.price, listing.currency)}</strong><p class="detail-availability ${Number(listing.stock) > 0 ? 'is-available' : 'is-unavailable'}"><i class="fa-solid ${Number(listing.stock) > 0 ? 'fa-circle-check' : 'fa-circle-xmark'}" aria-hidden="true"></i> ${esc(Number(listing.stock) > 0 ? t('productAvailable') : t('productUnavailable'))}${Number(listing.stock) > 0 ? ` · ${Number(listing.stock)} ${esc(t('stock'))}` : ''}</p>
        <div class="product-identifiers">${listing.brand ? `<p><span>${esc(t('brand'))}</span><strong>${esc(listing.brand)}</strong></p>` : ''}${listing.model_number ? `<p><span>${esc(t('model'))}</span><strong>${esc(listing.model_number)}</strong></p>` : ''}${listing.sku ? `<p><span>${esc(t('sku'))}</span><strong>${esc(listing.sku)}</strong></p>` : ''}${listing.gtin ? `<p><span>${esc(t('gtin'))}</span><strong>${esc(listing.gtin)}</strong></p>` : ''}</div>
        ${listing.is_demo ? `<p class="demo-data-note">${esc(t('demoListingDetails'))}</p>` : ''}<p class="product-description">${esc(listing.description || '')}</p><div class="detail-secondary"><p>${esc(t('sellerLabel'))}: ${esc(listing.seller?.name || '')}</p><p>${esc(t('type'))}: ${esc(listing.type || '')}</p>${listing.shipping_note ? `<p>${esc(listing.shipping_note)}</p>` : ''}</div>
        ${variantNotes.length ? `<section class="product-specs"><h2>${esc(t('availableVariants'))}</h2><ul>${variantNotes.map((variant) => `<li>${esc(typeof variant === 'string' ? variant : Object.entries(variant || {}).map(([key, value]) => `${key}: ${Array.isArray(value) ? value.join(', ') : value}`).join(' · '))}</li>`).join('')}</ul></section>` : ''}
        ${specifications.length ? `<section class="product-specs"><h2>${esc(t('productDetails'))}</h2><dl>${specifications.map(([key, value]) => `<div><dt>${esc(key)}</dt><dd>${esc(typeof value === 'string' ? value : JSON.stringify(value))}</dd></div>`).join('')}</dl></section>` : ''}
        ${Number(listing.stock) > 0 ? actionButton(t('addCart'), 'add-cart', `data-id="${esc(listing.id)}"`) : `<p>${esc(t('unavailable'))}</p>`}<p class="detail-disclaimer">${esc(t('checkoutNote'))}</p></div>
      </div>${related.length ? `<section class="related-products"><div class="section-heading"><span class="overline">${esc(t('featured'))}</span><h2>${esc(t('relatedProducts'))}</h2></div><div class="related-products-grid">${related.map(listingCard).join('')}</div></section>` : ''}
      ${state.zoomOpen && pics.length ? `<div class="gallery-lightbox" role="dialog" aria-modal="true" aria-label="${esc(t('gallery'))}"><button class="lightbox-close" type="button" data-action="zoom-close" aria-label="${esc(t('close'))}"><i class="fa-solid fa-xmark" aria-hidden="true"></i></button><button class="lightbox-arrow lightbox-prev" type="button" data-action="slide" data-delta="-1" aria-label="${esc(t('previousImage'))}"><i class="fa-solid fa-arrow-left" aria-hidden="true"></i></button><img src="${esc(pics[state.slide % pics.length])}" alt="${esc(imageMeta?.alt_text || listing.title)}"><button class="lightbox-arrow lightbox-next" type="button" data-action="slide" data-delta="1" aria-label="${esc(t('nextImage'))}"><i class="fa-solid fa-arrow-right" aria-hidden="true"></i></button><span>${state.slide + 1} / ${pics.length}</span></div>` : ''}</section>`;
  }
  function authPage() {
    return `<section class="auth-wrap"><div class="login-panel"><span class="overline">${esc(BRAND_NAME)}</span><h1>${esc(state.authMode === 'register' ? t('register') : t('login'))}</h1><p>${esc(t('accountNote'))}</p>
      <div class="auth-tabs"><button class="${state.authMode === 'login' ? 'active' : ''}" data-auth-mode="login">${esc(t('login'))}</button><button class="${state.authMode === 'register' ? 'active' : ''}" data-auth-mode="register">${esc(t('register'))}</button></div>
      <form data-form="auth"><label>${esc(t('email'))}<input type="email" name="email" autocomplete="email" required></label>${state.authMode === 'register' ? `<label>${esc(t('name'))}<input name="name" autocomplete="name" required></label>` : ''}<label>${esc(t('password'))}<input type="password" name="password" autocomplete="${state.authMode === 'register' ? 'new-password' : 'current-password'}" required></label>${state.authMode === 'register' ? `<label>${esc(t('confirm'))}<input type="password" name="password_confirmation" autocomplete="new-password" required></label>` : ''}<div class="form-feedback" role="alert"></div><button class="button-dark btn btn-primary" type="submit">${esc(state.authMode === 'register' ? t('createAccount') : t('signIn'))}</button></form>${state.authMode === 'login' ? `<button class="text-button mt-3" data-page="forgot-password">${esc(t('forgotPassword'))}</button>` : ''}</div></section>`;
  }
  function passwordRecoveryPage(reset = false) {
    return `<section class="auth-wrap"><div class="login-panel"><span class="overline">${esc(BRAND_NAME)}</span><h1>${esc(t(reset ? 'resetPassword' : 'forgotPassword'))}</h1><form data-form="${reset ? 'reset-password' : 'forgot-password'}" class="data-form"><label>${esc(t('email'))}<input type="email" name="email" value="${esc(state.resetEmail)}" autocomplete="email" required></label>${reset ? `<input type="hidden" name="token" value="${esc(state.resetToken)}"><label>${esc(t('password'))}<input type="password" name="password" autocomplete="new-password" minlength="12" required></label><label>${esc(t('confirm'))}<input type="password" name="password_confirmation" autocomplete="new-password" required></label>` : ''}<div class="form-feedback" role="status"></div><button class="button-dark btn btn-primary" type="submit">${esc(t(reset ? 'resetPassword' : 'sendResetLink'))}</button></form><button class="text-button mt-3" data-page="login">${esc(t('login'))}</button></div></section>`;
  }
  function accountPage() {
    if (!state.token || !state.user) return `<section class="market-section">${alertBox(t('loginRequired'))}<button class="button-dark btn btn-primary" data-page="login">${esc(t('login'))}</button></section>`;
    return `<section class="market-section account-panel"><span class="overline">${esc(t('account'))}</span><h1>${esc(t('profile'))}</h1><p>${esc(t('signedIn'))} ${esc(state.user.name || state.user.email || '')}</p><form data-form="profile" class="data-form"><label>${esc(t('name'))}<input name="name" value="${esc(state.user.name || '')}" required></label><label>${esc(t('email'))}<input type="email" name="email" value="${esc(state.user.email || '')}" required></label><div class="form-feedback" role="status"></div><button class="button-dark btn btn-primary" type="submit">${esc(t('save'))}</button></form><section class="account-addresses"><h2>${esc(t('addresses'))}</h2>${state.addresses.map((address) => `<article class="seller-listing"><div><strong>${esc(address.recipient)}</strong><small>${esc(address.line1)}, ${esc(address.postal_code)} ${esc(address.city)}, ${esc(address.country_code)}${address.is_default ? ` · ${esc(t('defaultAddress'))}` : ''}</small></div><button class="text-button" data-action="delete-address" data-id="${esc(address.id)}">${esc(t('delete'))}</button></article>`).join('')}<form data-form="address" class="data-form"><label>${esc(t('recipient'))}<input name="recipient" autocomplete="name" required></label><label>${esc(t('streetAddress'))}<input name="line1" autocomplete="address-line1" required></label><div class="form-row"><label>${esc(t('postalCode'))}<input name="postal_code" autocomplete="postal-code" inputmode="numeric" pattern="[0-9]{5}" maxlength="5" required></label><label>${esc(t('city'))}<input name="city" autocomplete="address-level2" required></label></div><input type="hidden" name="country_code" value="DE"><div class="form-row"><label><input type="checkbox" name="is_billing" value="1"> ${esc(t('billingAddress'))}</label><label><input type="checkbox" name="is_delivery" value="1" checked> ${esc(t('deliveryAddress'))}</label></div><div class="form-feedback" role="status"></div><button class="button-dark btn btn-primary" type="submit">${esc(t('addAddress'))}</button></form></section><button class="text-button mt-3" data-action="logout">${esc(t('logout'))}</button></section>`;
  }
  function cartPage() {
    if (!state.token) return `<section class="market-section">${alertBox(t('loginRequired'))}<button class="button-dark btn btn-primary" data-page="login">${esc(t('login'))}</button></section>`;
    if (state.loading) return `<section class="market-section">${loadingState()}</section>`;
    const items = state.cart?.items || [];
    const cartCurrency = items[0]?.listing?.currency || 'EUR';
    if (state.error) return `<section class="market-section">${alertBox(safeApiMessage(state.error))}${retryButton('load-cart')}</section>`;
    const mixed = Boolean(state.cart?.currency_mismatch);
    const unavailable = items.some((item) => item.available === false);
    return `<section class="market-section"><span class="overline">${esc(t('cart'))}</span><h1>${esc(t('cart'))}</h1>${state.cart?.has_unavailable_items ? alertBox(t('unavailableCart'), true) : ''}${mixed ? alertBox(t('currencyMismatch'), true) : ''}${items.length ? `<div class="cart-items">${items.map((item) => `<article class="cart-row ${item.available === false ? 'cart-item-unavailable' : ''}">${image(item.listing || {}, '')}<div class="cart-row-content"><h2>${esc(item.listing?.title || t('unavailableCart'))}${item.listing?.is_demo ? ` <small class="demo-listing-label">${esc(t('demoBadge'))}</small>` : ''}</h2><p>${item.listing ? money(item.listing.price, item.listing.currency) : '—'} · ${esc(item.listing?.seller?.name || '')}</p>${item.available === false ? `<p class="text-danger">${esc(t('unavailableCart'))}</p>` : `<label>${esc(t('quantity'))}<input type="number" min="1" max="${Math.max(1, Number(item.listing?.stock) || 1)}" value="${Number(item.quantity) || 1}" data-cart-quantity="${esc(item.id)}"></label>`}<button class="text-button" data-action="remove-cart" data-id="${esc(item.id)}">${esc(t('remove'))}</button></div></article>`).join('')}</div><div class="cart-summary"><strong>${esc(mixed ? t('cartTotal') : t('subtotal'))}: ${mixed ? '—' : money(state.cart.total ?? state.cart.subtotal, state.cart.currency || cartCurrency)}</strong><p>${esc(t('checkoutNote'))}</p>${items.some((item) => item.listing?.is_demo) ? `<p class="demo-data-note">${esc(t('demoDataNote'))}</p>` : ''}<form data-form="checkout"><div class="form-feedback" role="status"></div><button class="button-dark btn btn-primary" type="submit" ${unavailable || mixed ? 'disabled' : ''}>${esc(t('checkout'))}</button></form></div>` : `<p class="state-message">${esc(t('cartEmpty'))}</p>`}</section>`;
  }
  function ordersPage() {
    if (!state.token) return `<section class="market-section">${alertBox(t('loginRequired'))}<button class="button-dark btn btn-primary" data-page="login">${esc(t('login'))}</button></section>`;
    if (state.loading) return `<section class="market-section">${loadingState()}</section>`;
    if (state.error) return `<section class="market-section">${alertBox(safeApiMessage(state.error))}${retryButton('load-orders')}</section>`;
    const orders = Array.isArray(state.orders) ? state.orders : state.orders?.orders || [];
    return `<section class="market-section"><span class="overline">${esc(t('account'))}</span><h1>${esc(t('orderHistory'))}</h1>${state.orderNotice ? alertBox(state.orderNotice) : ''}${orders.length ? `<div class="table-responsive"><table class="table align-middle"><thead><tr><th>${esc(t('date'))}</th><th>${esc(t('total'))}</th><th>${esc(t('status'))}</th><th>${esc(t('paymentPending'))}</th><th>${esc(t('orderDetails'))}</th></tr></thead><tbody>${orders.map((order) => `<tr><td>${esc(order.created_at || order.date || '')}</td><td>${money(order.total ?? order.subtotal, order.currency)}</td><td>${esc(displayStatus(order.status || 'pending'))}${order.is_demo ? ` · ${esc(t('orderDemo'))}` : ''}</td><td>${esc(displayStatus(`payment_${order.payment_status || order.paymentStatus || 'pending'}`))}</td><td><button class="text-button" data-action="view-order" data-id="${esc(order.id)}">${esc(t('view'))}</button>${order.can_cancel ? ` <button class="text-button" data-action="cancel-order" data-id="${esc(order.id)}">${esc(t('cancelOrder'))}</button>` : ''}${!order.is_demo && order.payment_status === 'pending' ? (state.paymentReadiness?.live_available ? ` <button class="button-small btn btn-sm" data-action="pay-order" data-id="${esc(order.id)}">${esc(t('paySecurely'))}</button>` : ` <small>${esc(t('paymentUnavailable'))}</small>`) : ''}</td></tr>`).join('')}</tbody></table></div>` : `<p class="state-message">${esc(t('noOrders'))}</p>`}${state.activeOrder ? `<article class="workspace-panel order-detail-panel"><h2>${esc(t('orderDetails'))} #${esc(state.activeOrder.id)}</h2><p>${esc(t('status'))}: ${esc(displayStatus(state.activeOrder.status))} · ${esc(displayStatus(`payment_${state.activeOrder.payment_status}`))}${state.activeOrder.is_demo ? ` · ${esc(t('orderDemo'))}` : ''}</p>${state.activeOrder.is_demo ? `<p class="demo-data-note">${esc(t('demoDataNote'))}</p>` : ''}${state.activeOrder.stock_reservation_expires_at ? `<p>${esc(t('reservationUntil'))}: ${esc(state.activeOrder.stock_reservation_expires_at)}</p>` : ''}${(state.activeOrder.items || []).map((item) => `<p>${esc(item.title)} × ${Number(item.quantity)} — ${money(item.line_total, state.activeOrder.currency)} · ${esc(displayStatus(item.fulfillment_status))}</p>`).join('')}<strong>${esc(t('cartTotal'))}: ${money(state.activeOrder.total ?? state.activeOrder.subtotal, state.activeOrder.currency)}</strong><button class="text-button" data-action="close-order-details">${esc(t('close'))}</button></article>` : ''}</section>`;
  }
  function sellerPage() {
    if (!state.token) return `<section class="market-section">${alertBox(t('loginRequired'))}<button class="button-dark btn btn-primary" data-page="login">${esc(t('login'))}</button></section>`;
    if (state.loading) return `<section class="market-section">${loadingState()}</section>`;
    if (!isSeller()) return `<section class="market-section"><h1>${esc(t('sellerTitle'))}</h1><p>${esc(t('onboardingNote'))}</p><form data-form="onboard" class="data-form"><label>${esc(t('storeName'))}<input name="business_name" required></label><label>${esc(t('description'))}<textarea name="description" rows="4"></textarea></label><div class="form-feedback" role="alert"></div><button class="button-dark btn btn-primary" type="submit">${esc(t('onboard'))}</button></form></section>`;
    const cats = state.categories.map((category) => `<option value="${esc(category.id)}" ${String(state.listingEdit?.category?.id || state.listingEdit?.category_id || '') === String(category.id) ? 'selected' : ''}>${esc(category.name)}</option>`).join('');
    const current = state.listingEdit || {};
    const listings = state.sellerListings;
    const orders = state.sellerOrders;
    return `<section class="market-section"><span class="overline">${esc(t('sellerTitle'))}</span><h1>${esc(t('sellerTitle'))}</h1>${state.error ? `${alertBox(safeApiMessage(state.error))}${retryButton('retry-seller')}` : ''}
      ${listings.some((listing) => listing.is_demo) ? `<section class="workspace-panel demo-seller-summary"><h2>${esc(t('demoStats'))}</h2><p>${esc(t('demoDataNote'))}</p>${dataSummary(state.sellerStats)}</section>` : ''}<section class="workspace-panel"><h2>${esc(t('importCsv'))}</h2><p>${esc(t('csvColumns'))}</p><form data-form="seller-csv" class="data-form"><label>${esc(t('importCsv'))}<input type="file" name="file" accept=".csv,text/csv" required></label><div class="form-feedback" role="status"></div><button class="button-dark btn btn-primary" type="submit">${esc(t('importCsv'))}</button></form></section><div class="workspace-columns"><section class="workspace-panel"><div class="panel-heading"><h2>${esc(current.id ? t('edit') : t('addListing'))}</h2></div><form data-form="listing" class="data-form">
        <label>${esc(t('title'))}<input name="title" value="${esc(current.title || '')}" required></label><label>${esc(t('description'))}<textarea name="description" rows="3">${esc(current.description || '')}</textarea></label>
        <div class="form-row"><label>${esc(t('brand'))}<input name="brand" maxlength="120" value="${esc(current.brand || '')}"></label><label>${esc(t('model'))}<input name="model_number" maxlength="120" value="${esc(current.model_number || '')}"></label><label>${esc(t('sku'))}<input name="sku" maxlength="120" value="${esc(current.sku || '')}"></label><label>${esc(t('gtin'))}<input name="gtin" inputmode="numeric" value="${esc(current.gtin || '')}"></label></div>
        <div class="form-row"><label>${esc(t('supplierName'))}<input name="supplier_name" maxlength="180" value="${esc(current.supplier_name || '')}"></label><label>${esc(t('supplierReference'))}<input name="supplier_product_reference" maxlength="180" value="${esc(current.supplier_product_reference || '')}"></label></div><p class="form-help">${esc(t('supplierDataNote'))}</p>
        <div class="form-row"><label>${esc(t('specifications'))} · JSON<textarea name="specifications" rows="3">${esc(JSON.stringify(current.specifications || {}, null, 2))}</textarea></label><label>${esc(t('variantOptions'))} · JSON<textarea name="variant_options" rows="3">${esc(JSON.stringify(current.variant_options || [], null, 2))}</textarea></label></div>
        <label>${esc(t('typeLabel'))}<select name="type"><option value="product" ${current.type !== 'service' ? 'selected' : ''}>${esc(t('product'))}</option><option value="service" ${current.type === 'service' ? 'selected' : ''}>${esc(t('service'))}</option></select></label><label>${esc(t('uploadImages'))}<input type="file" name="images" accept="image/jpeg,image/png,image/webp" multiple></label>
        <div class="form-row"><label>${esc(t('imageRightsSource'))}<input name="rights_source" maxlength="255"></label><label>${esc(t('imageRightsLicense'))}<input name="rights_license" maxlength="255"></label></div>
        <label>${esc(t('category'))}<select name="category_id" required><option value="">${esc(t('selectCategory'))}</option>${cats}</select></label>
        <div class="form-row"><label>${esc(t('price'))}<input name="price" type="number" min="0" step="0.01" value="${esc(current.price ?? '')}" required></label><label>${esc(t('currency'))}<input name="currency" maxlength="3" value="${esc(current.currency || 'EUR')}" required></label><label>${esc(t('stock'))}<input name="stock" type="number" min="0" step="1" value="${esc(current.stock ?? 0)}"></label></div>
        <div class="form-feedback" role="alert"></div><button class="button-dark btn btn-primary" type="submit">${esc(t('saveListing'))}</button>${current.id ? `<button class="text-button" type="button" data-action="cancel-edit">${esc(t('close'))}</button>` : ''}</form>
        <h2 class="mt-5">${esc(t('listings'))}</h2>${listings.length ? listings.map((listing) => `<article class="seller-listing"><div>${image(listing)}<h3>${esc(listing.title)}${listing.is_demo ? ` <small class="demo-listing-label">${esc(t('demoBadge'))}</small>` : ''}</h3><p>${money(listing.price, listing.currency)} · ${esc(t(listing.is_hidden ? 'hiddenProduct' : 'showHomepage'))} · ${esc(t('stock'))}: ${Number(listing.stock) || 0}</p>${sellerGalleryControls(listing)}</div><div><button class="text-button" data-action="edit-listing" data-id="${esc(listing.id)}">${esc(t('edit'))}</button><button class="text-button" data-action="toggle-seller-visibility" data-id="${esc(listing.id)}" data-value="${listing.is_hidden ? '0' : '1'}">${esc(t(listing.is_hidden ? 'showHomepage' : 'removeHomepage'))}</button><button class="text-button" data-action="delete-listing" data-id="${esc(listing.id)}">${esc(t('delete'))}</button><form data-form="images" data-id="${esc(listing.id)}"><label>${esc(t('uploadImages'))}<input type="file" name="images" accept="image/jpeg,image/png,image/webp" multiple></label><label>${esc(t('imageRightsSource'))}<input name="rights_source" maxlength="255"></label><label>${esc(t('imageRightsLicense'))}<input name="rights_license" maxlength="255"></label><button class="button-small btn btn-sm" type="submit">${esc(t('uploadImages'))}</button></form></div></article>`).join('') : `<p class="state-message">${esc(t('noSellerListings'))}</p>`}</section>
        <section class="workspace-panel"><h2>${esc(t('sellerOrders'))}</h2>${orders.length ? orders.map((order) => `<article class="seller-order"><h3>${esc(order.id || order.order_number || '')}${order.is_demo ? ` · ${esc(t('orderDemo'))}` : ''}</h3><p>${esc(displayStatus(`payment_${order.payment_status || 'pending'}`))} · ${money((order.items || []).reduce((sum, item) => sum + Number(item.line_total || 0), 0), order.currency)}</p>${(order.items || []).map((item) => { const nextStatuses = { pending: ['processing', 'cancelled'], processing: ['shipped', 'cancelled'], shipped: ['delivered'], delivered: [], cancelled: [] }; const options = item.is_demo ? (nextStatuses[item.fulfillment_status] || []) : ['processing', 'shipped', 'delivered', 'cancelled']; const canUpdate = order.payment_status === 'paid' || (item.is_demo && order.payment_status === 'pending'); return `<div class="seller-order-item"><span>${esc(item.title || '')}${item.is_demo ? `<small class="demo-listing-label">${esc(t('orderDemo'))}</small>` : ''}</span><span>${esc(displayStatus(item.fulfillment_status || 'pending'))}</span>${item.is_demo && order.payment_status === 'pending' ? `<p class="demo-data-note">${esc(t('demoSellerFulfillment'))}</p>` : ''}${canUpdate && options.length ? `<form data-form="seller-order" data-order="${esc(order.id)}" data-item="${esc(item.id)}"><select name="fulfillment_status" required><option value="">${esc(t('updateOrder'))}</option>${options.map((status) => `<option value="${status}">${esc(t(`status_${status}`))}</option>`).join('')}</select><button class="button-small btn btn-sm" type="submit">${esc(t('updateOrder'))}</button></form>` : ''}</div>`; }).join('')}</article>`).join('') : `<p>${esc(t('noSellerOrders'))}</p>`}</section></div></section>`;
  }
  function dataSummary(data) {
    if (!data || typeof data !== 'object') return `<p>${esc(t('empty'))}</p>`;
    const values = Object.entries(data).filter(([, value]) => value === null || ['string', 'number', 'boolean'].includes(typeof value));
    return `${values.length ? `<dl class="dashboard-metrics">${values.map(([key, value]) => `<div><dt>${esc(key.replace(/[_-]/g, ' '))}</dt><dd>${esc(value ?? '—')}</dd></div>`).join('')}</dl>` : ''}${values.length !== Object.keys(data).length ? `<pre class="dashboard-data">${esc(JSON.stringify(data, null, 2))}</pre>` : ''}${values.length || Object.keys(data).length ? '' : `<p>${esc(t('empty'))}</p>`}`;
  }
  function adminGalleryControls(listing) {
    const photos = Array.isArray(listing.image_gallery) ? listing.image_gallery : [];
    if (!photos.length) return `<p class="catalog-completeness is-incomplete">${esc(t('galleryIncomplete'))} · 0</p>`;
    const complete = photos.length >= 5 && photos.every((photo) => photo.rights_source && photo.rights_license && photo.sha256);
    return `<div class="catalog-completeness ${complete ? '' : 'is-incomplete'}">${esc(complete ? t('gallery') : t('galleryIncomplete'))} · ${photos.length}${photos.length < 5 ? ` / 5` : ''}${photos.some((photo) => !photo.rights_source || !photo.rights_license) ? ` · ${esc(t('sourceNotVerified'))}` : ''}</div><div class="admin-gallery">${photos.map((photo, index) => `<div class="admin-gallery-item"><img src="${esc(photo.url)}" alt="${esc(photo.alt_text || listing.title)}" loading="lazy"><p>${photo.is_primary ? `★ ${esc(t('primaryImage'))}` : `${esc(t('galleryViews'))} ${index + 1}`} · ${photo.rights_source && photo.rights_license ? `${esc(photo.rights_source)} · ${esc(photo.rights_license)}` : esc(t('sourceNotVerified'))}</p><div class="gallery-actions"><button type="button" data-action="admin-image-primary" data-listing="${esc(listing.id)}" data-image="${esc(photo.id)}">${esc(t('setPrimary'))}</button><button type="button" data-action="admin-image-move" data-listing="${esc(listing.id)}" data-image="${esc(photo.id)}" data-delta="-1" ${index === 0 ? 'disabled' : ''}>←</button><button type="button" data-action="admin-image-move" data-listing="${esc(listing.id)}" data-image="${esc(photo.id)}" data-delta="1" ${index === photos.length - 1 ? 'disabled' : ''}>→</button><button type="button" data-action="admin-image-remove" data-listing="${esc(listing.id)}" data-image="${esc(photo.id)}">${esc(t('removeImage'))}</button><form data-form="admin-image-replace" data-listing="${esc(listing.id)}" data-image="${esc(photo.id)}"><input name="image" type="file" accept="image/jpeg,image/png,image/webp" required><input name="rights_source" maxlength="255" placeholder="${esc(t('imageRightsSource'))}"><input name="rights_license" maxlength="255" placeholder="${esc(t('imageRightsLicense'))}"><button type="submit">${esc(t('replaceImage'))}</button></form></div></div>`).join('')}</div>`;
  }
  function sellerGalleryControls(listing) {
    const photos = Array.isArray(listing.image_gallery) ? listing.image_gallery : [];
    const complete = photos.length >= 5 && photos.every((photo) => photo.rights_source && photo.rights_license && photo.sha256);
    return `<div class="catalog-completeness ${complete ? '' : 'is-incomplete'}">${esc(complete ? t('gallery') : t('galleryIncomplete'))} · ${photos.length}${photos.length < 5 ? ' / 5' : ''}</div>${photos.length ? `<div class="admin-gallery">${photos.map((photo, index) => `<div class="admin-gallery-item"><img src="${esc(photo.url)}" alt="${esc(photo.alt_text || listing.title)}" loading="lazy"><p>${photo.is_primary ? `★ ${esc(t('primaryImage'))}` : `${esc(t('galleryViews'))} ${index + 1}`}</p><div class="gallery-actions"><button type="button" data-action="seller-image-primary" data-listing="${esc(listing.id)}" data-image="${esc(photo.id)}">${esc(t('setPrimary'))}</button><button type="button" data-action="seller-image-move" data-listing="${esc(listing.id)}" data-image="${esc(photo.id)}" data-delta="-1" ${index === 0 ? 'disabled' : ''}>←</button><button type="button" data-action="seller-image-move" data-listing="${esc(listing.id)}" data-image="${esc(photo.id)}" data-delta="1" ${index === photos.length - 1 ? 'disabled' : ''}>→</button><button type="button" data-action="seller-image-remove" data-listing="${esc(listing.id)}" data-image="${esc(photo.id)}">${esc(t('removeImage'))}</button><form data-form="seller-image-replace" data-listing="${esc(listing.id)}" data-image="${esc(photo.id)}"><input name="image" type="file" accept="image/jpeg,image/png,image/webp" required><input name="rights_source" maxlength="255" placeholder="${esc(t('imageRightsSource'))}"><input name="rights_license" maxlength="255" placeholder="${esc(t('imageRightsLicense'))}"><button type="submit">${esc(t('replaceImage'))}</button></form></div></div>`).join('')}</div>` : ''}`;
  }
  function categoryImageReviewPanel() {
    if (!isLocalDevelopment() || !isAdministrator()) return '';
    const summary = state.categoryImageReviewSummary || {};
    const candidates = state.categoryImageReviewCandidates || [];
    const statusLabels = { pending: t('reviewPending'), approved: t('reviewApproved'), rejected: t('reviewRejected') };
    return `<section class="workspace-panel category-image-review-panel" aria-labelledby="category-image-review-heading">
      <div class="panel-heading"><div><span class="overline">${esc(t('adminTitle'))}</span><h2 id="category-image-review-heading">${esc(t('categoryImageReviewTitle'))}</h2></div></div>
      <p class="category-review-disclaimer">${esc(t('categoryImageReviewDescription'))}</p>
      ${state.categoryImageReviewError ? `<div class="alert alert-danger" role="alert">${esc(t('reviewLoadError'))}</div>` : ''}
      <div class="category-review-summary" aria-label="${esc(t('categoryImageReviewTitle'))}">
        <div><span>${esc(t('all'))}</span><strong>${Number(summary.total) || 0}</strong></div><div><span>${esc(t('reviewPending'))}</span><strong>${Number(summary.pending) || 0}</strong></div><div><span>${esc(t('reviewApproved'))}</span><strong>${Number(summary.approved) || 0}</strong></div><div><span>${esc(t('reviewRejected'))}</span><strong>${Number(summary.rejected) || 0}</strong></div>
      </div>
      ${candidates.length ? `<div class="category-review-grid">${candidates.map((candidate) => {
        const status = ['pending', 'approved', 'rejected'].includes(candidate.review_status) ? candidate.review_status : 'pending';
        return `<article class="category-review-card"><div class="category-review-image-frame"><img class="category-review-photo" src="${esc(candidate.direct_image_url)}" alt="${esc(candidate.category_name)} — ${esc(candidate.photographer || '')}" loading="lazy" decoding="async"><div class="category-review-image-fallback" hidden role="img" aria-label="${esc(t('imageUnavailable'))}"><i class="fa-regular fa-image" aria-hidden="true"></i><span>${esc(t('imageUnavailable'))}</span></div></div><div class="category-review-card-copy"><div class="category-review-card-heading"><h3>${esc(candidate.category_name)}</h3><span class="category-review-status category-review-status-${status}">${esc(statusLabels[status])}</span></div><p class="category-review-credit">${esc(candidate.photographer || '')}</p><a class="category-review-source" href="${esc(candidate.original_unsplash_page_url)}" target="_blank" rel="noopener noreferrer">${esc(t('openUnsplash'))} ↗</a><form data-form="category-image-review" data-slug="${esc(candidate.category_slug)}"><label>${esc(t('reviewStatus'))}<select name="status"><option value="pending" ${status === 'pending' ? 'selected' : ''}>${esc(t('reviewPending'))}</option><option value="approved" ${status === 'approved' ? 'selected' : ''}>${esc(t('reviewApproved'))}</option><option value="rejected" ${status === 'rejected' ? 'selected' : ''}>${esc(t('reviewRejected'))}</option></select></label><label>${esc(t('reviewNote'))}<textarea name="note" maxlength="500" rows="3">${esc(candidate.review_note || '')}</textarea></label><div class="form-feedback" role="status"></div><button class="button-small btn btn-sm" type="submit">${esc(t('saveReview'))}</button></form></div></article>`;
      }).join('')}</div>` : `<p class="category-review-empty">${esc(state.categoryImageReviewError ? t('reviewLoadError') : t('empty'))}</p>`}
    </section>`;
  }
  function adminPage() {
    if (!state.token || !isAdmin()) return `<section class="market-section"><h1>${esc(t('adminTitle'))}</h1>${alertBox(t('noAdmin'), true)}<p>${esc(t('serverAuth'))}</p></section>`;
    if (state.loading) return `<section class="market-section">${loadingState()}</section>`;
    const pending = Array.isArray(state.pendingListings) ? state.pendingListings : state.pendingListings?.listings || [];
    const sellers = Array.isArray(state.pendingSellers) ? state.pendingSellers : state.pendingSellers?.sellers || [];
    const editing = state.adminListingEdit || {};
    const categories = state.categories.map((category) => `<option value="${esc(category.id)}" ${String(editing.category?.id || editing.category_id || '') === String(category.id) ? 'selected' : ''}>${esc(category.name)}</option>`).join('');
    const adminSellers = state.adminSellers.map((seller) => `<option value="${esc(seller.id)}" ${String(editing.seller?.id || editing.seller_id || '') === String(seller.id) ? 'selected' : ''}>${esc(seller.name)}</option>`).join('');
    const pagination = state.adminPagination;
    return `<section class="market-section admin-dashboard"><span class="overline">${esc(t('adminTitle'))}</span><h1>${esc(t('dashboard'))}</h1><p>${esc(t('serverAuth'))}</p>${state.error ? `${alertBox(safeApiMessage(state.error))}${retryButton('retry-admin')}` : ''}${categoryImageReviewPanel()}
      <div class="workspace-columns"><section class="workspace-panel"><h2>${esc(t('dashboard'))}</h2>${dataSummary(state.adminDashboard)}</section><section class="workspace-panel"><h2>${esc(t('pendingListings'))}</h2>${pending.length ? pending.map((listing) => `<article class="seller-listing">${image(listing)}<div><h3>${esc(listing.title)}</h3><p>${esc(listing.seller?.name || '')} · ${money(listing.price, listing.currency)}</p><p>${esc(listing.description || '')}</p><button class="button-small btn btn-sm" data-action="review-listing" data-id="${esc(listing.id)}" data-status="approved">${esc(t('approve'))}</button> <button class="button-small btn btn-sm" data-action="review-listing" data-id="${esc(listing.id)}" data-status="rejected">${esc(t('reject'))}</button></div></article>`).join('') : `<p>${esc(t('noPending'))}</p>`}</section></div>
      ${adminDemoCatalogPanel()}<section class="workspace-panel admin-listings-panel"><h2>${esc(t('manageListings'))}</h2>
        <form data-form="admin-search" class="admin-listing-search"><label>${esc(t('adminSearch'))}<input name="q" value="${esc(state.adminQuery)}" placeholder="${esc(t('searchPlaceholder'))}"></label><label>${esc(t('listingStatus'))}<select name="status"><option value="">${esc(t('all'))}</option><option value="approved" ${state.adminStatus === 'approved' ? 'selected' : ''}>${esc(t('status_approved'))}</option><option value="pending_review" ${state.adminStatus === 'pending_review' ? 'selected' : ''}>${esc(t('status_pending_review'))}</option><option value="rejected" ${state.adminStatus === 'rejected' ? 'selected' : ''}>${esc(t('status_rejected'))}</option></select></label><label>${esc(t('typeLabel'))}<select name="type"><option value="">${esc(t('allTypes'))}</option><option value="product" ${state.adminType === 'product' ? 'selected' : ''}>${esc(t('product'))}</option><option value="service" ${state.adminType === 'service' ? 'selected' : ''}>${esc(t('service'))}</option></select></label><label>${esc(t('category'))}<select name="category"><option value="">${esc(t('all'))}</option>${state.categories.map((category) => `<option value="${esc(category.slug)}" ${String(state.adminCategory) === String(category.slug) ? 'selected' : ''}>${esc(category.name)}</option>`).join('')}</select></label><button class="button-small btn btn-sm" type="submit">${esc(t('search'))}</button></form>
        <form data-form="admin-listing" class="data-form"><h3>${esc(editing.id ? t('edit') : t('adminCreateListing'))}</h3>
          <label>${esc(t('selectSeller'))}<select name="seller_id" required><option value="">${esc(t('selectSeller'))}</option>${adminSellers}</select></label>
          <label>${esc(t('title'))}<input name="title" value="${esc(editing.title || '')}" required maxlength="255"></label>
          <label>${esc(t('description'))}<textarea name="description" rows="3" required>${esc(editing.description || '')}</textarea></label>
          <div class="form-row"><label>${esc(t('brand'))}<input name="brand" maxlength="120" value="${esc(editing.brand || '')}"></label><label>${esc(t('model'))}<input name="model_number" maxlength="120" value="${esc(editing.model_number || '')}"></label><label>${esc(t('sku'))}<input name="sku" maxlength="120" value="${esc(editing.sku || '')}"></label><label>${esc(t('gtin'))}<input name="gtin" inputmode="numeric" value="${esc(editing.gtin || '')}"></label></div>
          <div class="form-row"><label>${esc(t('specifications'))} · JSON<textarea name="specifications" rows="3">${esc(JSON.stringify(editing.specifications || {}, null, 2))}</textarea></label><label>${esc(t('variantOptions'))} · JSON<textarea name="variant_options" rows="3">${esc(JSON.stringify(editing.variant_options || [], null, 2))}</textarea></label></div>
          <div class="form-row"><label>${esc(t('typeLabel'))}<select name="type"><option value="product" ${editing.type !== 'service' ? 'selected' : ''}>${esc(t('product'))}</option><option value="service" ${editing.type === 'service' ? 'selected' : ''}>${esc(t('service'))}</option></select></label>
          <label>${esc(t('category'))}<select name="category_id" required><option value="">${esc(t('selectCategory'))}</option>${categories}</select></label></div>
          <div class="form-row"><label>${esc(t('price'))}<input name="price" type="number" min="0" step="0.01" value="${esc(editing.price ?? '')}" required></label><label>${esc(t('currency'))}<input name="currency" minlength="3" maxlength="3" value="${esc(editing.currency || 'EUR')}" required></label><label>${esc(t('stock'))}<input name="stock" type="number" min="0" step="1" value="${esc(editing.stock ?? 0)}" required></label></div>
          <div class="form-row"><label>${esc(t('listingStatus'))}<select name="status"><option value="approved" ${editing.status === 'approved' || !editing.status ? 'selected' : ''}>${esc(t('status_approved'))}</option><option value="pending_review" ${editing.status === 'pending_review' ? 'selected' : ''}>${esc(t('status_pending_review'))}</option><option value="rejected" ${editing.status === 'rejected' ? 'selected' : ''}>${esc(t('status_rejected'))}</option></select></label><label>${esc(t('uploadImages'))}<input type="file" name="images" accept="image/jpeg,image/png,image/webp" multiple></label></div>
          <div class="form-row"><label><input type="checkbox" name="is_featured" value="1" ${editing.is_featured ? 'checked' : ''}> ${esc(t('featuredProduct'))}</label><label><input type="checkbox" name="is_hidden" value="1" ${editing.is_hidden ? 'checked' : ''}> ${esc(t('hiddenProduct'))}</label></div>
          <div class="form-row"><label>${esc(t('imageRightsSource'))}<input name="rights_source" maxlength="255" placeholder="${esc(t('imageRightsSource'))}"></label><label>${esc(t('imageRightsLicense'))}<input name="rights_license" maxlength="255" placeholder="${esc(t('imageRightsLicense'))}"></label></div>
          <div class="form-feedback" role="alert"></div><button class="button-dark btn btn-primary" type="submit">${esc(t('saveListing'))}</button>${editing.id ? ` <button class="text-button" type="button" data-action="cancel-admin-listing">${esc(t('close'))}</button>` : ''}</form>
        <div class="admin-listing-results">${state.adminListings.length ? `<div class="admin-listing-grid">${state.adminListings.map((listing) => {
          const galleryCount = Array.isArray(listing.image_gallery) ? listing.image_gallery.length : 0;
          const stock = Math.max(0, Number(listing.stock) || 0);
          return `<article class="admin-product-card"><div class="admin-product-media">${image(listing)}</div><div class="admin-product-copy"><div class="admin-product-heading"><h3>${esc(listing.title)}</h3><span class="admin-product-status">${esc(displayStatus(listing.status))}</span></div><p class="admin-product-category">${esc(listing.category?.name || '')}</p><p class="admin-product-model">${esc([listing.brand, listing.model_number].filter(Boolean).join(' · '))}</p><div class="admin-product-price-row"><strong>${money(listing.price, listing.currency)}</strong><span>${esc(t('stock'))}: ${stock}</span></div><p class="admin-product-seller">${esc(listing.seller?.name || '')}</p><div class="admin-product-flags">${listing.is_featured ? `<span>★ ${esc(t('featuredProduct'))}</span>` : ''}${listing.is_hidden ? `<span>${esc(t('hiddenProduct'))}</span>` : ''}</div>${listing.duplicate_review_status === 'quarantined' ? `<div class="admin-duplicate-alert">${esc(t('duplicateReview'))}${listing.duplicate_of_id ? ` · #${esc(listing.duplicate_of_id)}` : ''}<div class="admin-product-controls"><button type="button" data-action="duplicate-distinct" data-id="${esc(listing.id)}">${esc(t('markDistinct'))}</button><button type="button" data-action="duplicate-archive" data-id="${esc(listing.id)}">${esc(t('archive'))}</button></div></div>` : ''}<details class="admin-product-gallery"><summary>${esc(t('gallery'))} · ${galleryCount}</summary>${adminGalleryControls(listing)}</details></div><div class="admin-product-controls admin-product-actions"><button type="button" data-action="edit-admin-listing" data-id="${esc(listing.id)}">${esc(t('edit'))}</button><button type="button" data-action="toggle-listing-field" data-id="${esc(listing.id)}" data-field="is_hidden" data-value="${listing.is_hidden ? '0' : '1'}">${esc(t(listing.is_hidden ? 'showHomepage' : 'removeHomepage'))}</button><button type="button" data-action="toggle-listing-field" data-id="${esc(listing.id)}" data-field="is_featured" data-value="${listing.is_featured ? '0' : '1'}">${esc(listing.is_featured ? t('unfeatureProduct') : t('featureProduct'))}</button><button type="button" data-action="delete-admin-listing" data-id="${esc(listing.id)}">${esc(t('delete'))}</button></div></article>`;
        }).join('')}</div>` : `<p class="admin-listing-empty">${esc(t('noAdminListings'))}</p>`}</div>
        ${Number(pagination.last_page) > 1 ? `<div class="admin-pagination"><button class="text-button" data-action="admin-listings-page" data-page="${Math.max(1, Number(pagination.current_page) - 1)}" ${Number(pagination.current_page) <= 1 ? 'disabled' : ''}>← ${esc(t('back'))}</button><span>${esc(t('page'))} ${Number(pagination.current_page)} ${esc(t('of'))} ${Number(pagination.last_page)}</span><button class="text-button" data-action="admin-listings-page" data-page="${Math.min(Number(pagination.last_page), Number(pagination.current_page) + 1)}" ${Number(pagination.current_page) >= Number(pagination.last_page) ? 'disabled' : ''}>${esc(t('nextPage'))} →</button></div>` : ''}
      </section>
      <section class="workspace-panel"><h2>${esc(t('pendingSellers'))}</h2>${sellers.length ? sellers.map((seller) => `<article class="seller-application"><h3>${esc(seller.business_name || t('sellerApplication'))}</h3><p>${esc(seller.user?.name || '')} · ${esc(seller.user?.email || '')}</p><p>${esc(seller.description || '')}</p><button class="button-small btn btn-sm" data-action="review-seller" data-id="${esc(seller.id)}" data-decision="approved">${esc(t('approve'))}</button> <button class="button-small btn btn-sm" data-action="review-seller" data-id="${esc(seller.id)}" data-decision="rejected">${esc(t('reject'))}</button></article>`).join('') : `<p>${esc(t('noPendingSellers'))}</p>`}</section>
      <section class="workspace-panel admin-categories-panel"><h2>${esc(t('adminCategories'))}</h2><form data-form="admin-category" class="data-form"><label>${esc(t('categoryName'))}<input name="name" maxlength="120" required value="${esc(state.adminCategoryEdit?.name || '')}"></label><label>${esc(t('categorySlug'))}<input name="slug" maxlength="140" value="${esc(state.adminCategoryEdit?.slug || '')}"></label><div class="form-feedback" role="alert"></div><button class="button-small btn btn-sm" type="submit">${esc(t('saveCategory'))}</button>${state.adminCategoryEdit ? ` <button class="text-button" type="button" data-action="cancel-admin-category">${esc(t('close'))}</button>` : ''}</form>${state.adminCategories.length ? `<div class="admin-category-grid">${state.adminCategories.map((category) => `<article class="admin-category-card"><div class="admin-category-copy"><strong>${esc(category.name)}</strong><small>${esc(category.slug)}</small><span>${Number(category.listing_count) || 0} ${esc(t('listings'))}</span></div><div class="admin-product-controls"><button class="text-button" data-action="edit-admin-category" data-id="${esc(category.id)}">${esc(t('edit'))}</button><button class="text-button" data-action="delete-admin-category" data-id="${esc(category.id)}">${esc(t('delete'))}</button></div></article>`).join('')}</div>` : `<p class="admin-listing-empty">${esc(t('noAdminCategories'))}</p>`}</section>
      <section class="workspace-panel"><h2>${esc(t('adminUsers'))}</h2><form data-form="admin-users-search" class="admin-listing-search"><label>${esc(t('adminUsers'))}<input name="q" value="${esc(state.adminUsersQuery)}"></label><button class="button-small btn btn-sm" type="submit">${esc(t('search'))}</button></form>${state.adminUsers.length ? state.adminUsers.map((user) => { const isSelf = String(user.id) === String(state.user?.id); return `<article class="seller-listing admin-user-row"><div><strong>${esc(user.name)}</strong><small>${esc(user.email)} · ${esc(t(`role_${user.role}`))}</small></div>${isAdministrator() ? `<form data-form="admin-user-role" data-id="${esc(user.id)}"><label>${esc(t('userRole'))}<select name="role" ${isSelf ? 'disabled' : ''}>${['buyer', 'seller', 'staff', 'admin'].map((role) => `<option value="${role}" ${role === user.role ? 'selected' : ''}>${esc(t(`role_${role}`))}</option>`).join('')}</select></label><button class="button-small btn btn-sm" type="submit" ${isSelf ? 'disabled' : ''}>${esc(t('saveRole'))}</button></form>` : ''}<small>${esc(user.created_at || '')}</small></article>`; }).join('') : `<p class="admin-listing-empty">${esc(t('noAdminUsers'))}</p>`}${adminPager(state.adminUsersPagination, 'admin-users-page')}</section>
      <section class="workspace-panel"><h2>${esc(t('adminOrders'))}</h2><form data-form="admin-orders-search" class="admin-listing-search"><label>${esc(t('orderSearch'))}<input name="q" value="${esc(state.adminOrdersQuery)}"></label><button class="button-small btn btn-sm" type="submit">${esc(t('search'))}</button></form>${state.adminOrders.length ? state.adminOrders.map((order) => `<article class="seller-order"><h3>${esc(t('orderId'))} #${esc(order.id)}${order.is_demo ? ` · ${esc(t('orderDemo'))}` : ''}</h3><p>${esc(order.buyer?.name || '')} · ${esc(order.buyer?.email || '')}</p><p>${esc(displayStatus(order.status))} · ${esc(displayStatus(`payment_${order.payment_status || 'pending'}`))} · Subtotal ${money(order.subtotal, order.currency)} · Shipping ${money(order.shipping_total || 0, order.currency)} · Total ${money(order.total ?? order.subtotal, order.currency)}</p>${order.status_history?.length ? `<details><summary>Order status history</summary>${order.status_history.map((entry) => `<p>${esc(entry.created_at || '')} · ${esc(displayStatus(entry.to_status))} · ${esc(entry.actor?.name || 'System')}</p>`).join('')}</details>` : ''}${!order.is_demo ? `<form data-form="admin-order-status" data-id="${esc(order.id)}"><label>Transition<select name="status" required><option value="">Select status</option>${['confirmed', 'processing', 'shipped', 'delivered', 'cancelled'].map((status) => `<option value="${status}">${esc(displayStatus(status))}</option>`).join('')}</select></label><input name="note" maxlength="500" placeholder="Audit note"><button type="submit">Update status</button></form>` : ''}${(order.items || []).map((item) => `<small>${esc(item.title)} × ${Number(item.quantity)} — ${money(item.line_total, order.currency)}</small>`).join('<br>')}</article>`).join('') : `<p>${esc(t('noAdminOrders'))}</p>`}${adminPager(state.adminOrdersPagination, 'admin-orders-page')}</section></section>`;
  }

  function adminPager(pagination, action) {
    if (Number(pagination?.last_page) <= 1) return '';
    const current = Number(pagination.current_page) || 1;
    const last = Number(pagination.last_page) || 1;
    return `<div class="admin-pagination"><button class="text-button" data-action="${action}" data-page="${Math.max(1, current - 1)}" ${current <= 1 ? 'disabled' : ''}>← ${esc(t('back'))}</button><span>${esc(t('page'))} ${current} ${esc(t('of'))} ${last}</span><button class="text-button" data-action="${action}" data-page="${Math.min(last, current + 1)}" ${current >= last ? 'disabled' : ''}>${esc(t('nextPage'))} →</button></div>`;
  }
  function adminDemoCatalogPanel() {
    const pagination = state.adminDemoPagination;
    const products = state.adminDemoProducts;
    const cards = products.map((product) => `<article class="admin-demo-card"><div class="demo-product-media"><img class="demo-product-image" src="${esc(imageUrl(product.image_url))}" alt="${esc(product.title)} — ${esc(t('demoBadge'))}" loading="lazy" decoding="async" onerror="this.hidden=true;this.nextElementSibling.hidden=false"><div class="demo-image-fallback" hidden><i class="fa-regular fa-image"></i><span>${esc(t('demoBadge'))}</span></div><span class="demo-product-badge">${esc(t('demoBadge'))}</span></div><div class="admin-demo-copy"><span>${esc(product.category?.name || '')} · ${esc(t('demoNotForSale'))}</span><h3>${esc(product.title)}</h3><p>${esc(product.description || '')}</p><div class="admin-demo-actions"><button type="button" data-action="toggle-demo-homepage" data-id="${esc(product.id)}" data-value="${product.show_on_homepage ? '0' : '1'}">${esc(t(product.show_on_homepage ? 'hideDemo' : 'showDemo'))}</button><button type="button" data-action="delete-demo-product" data-id="${esc(product.id)}">${esc(t('delete'))}</button></div></div></article>`).join('');
    return `<section class="workspace-panel admin-demo-catalog-panel"><div class="section-heading"><span class="overline">${esc(t('demoBadge'))}</span><h2>${esc(t('adminDemoCatalog'))}</h2><p class="demo-catalog-intro">${esc(t('demoIntro'))}</p></div>${state.adminDemoError ? `<p class="state-message catalog-error" role="status">${esc(t('demoUnavailable'))} ${esc(safeApiMessage(state.adminDemoError, 'catalogUnavailable'))}</p>` : products.length ? `<div class="admin-demo-grid">${cards}</div>${adminPager(pagination, 'admin-demo-page')}` : `<p class="admin-listing-empty">${esc(t('demoEmpty'))}</p>`}</section>`;
  }
  function renderPage() {
    switch (state.page) {
      case 'detail': return detailPage();
      case 'login': return authPage();
      case 'forgot-password': return passwordRecoveryPage(false);
      case 'reset-password': return passwordRecoveryPage(true);
      case 'account': return accountPage();
      case 'cart': return cartPage();
      case 'orders': return ordersPage();
      case 'seller': return sellerPage();
      case 'admin': return adminPage();
      default: return storePage();
    }
  }
  function render() {
    shell();
    if (state.page === 'account' && state.token && state.user) {
      const account = document.querySelector('.account-panel');
      if (account) {
        if (!state.user.email_verified_at) account.insertAdjacentHTML('afterbegin', `<p class="demo-data-note">${esc(t('emailUnverified'))} <button type="button" class="text-button" data-action="send-verification">${esc(t('sendVerification'))}</button></p>`);
        account.insertAdjacentHTML('beforeend', `<section class="workspace-panel"><h2>${esc(t('changePassword'))}</h2><form data-form="change-password" class="data-form"><label>${esc(t('currentPassword'))}<input type="password" name="current_password" autocomplete="current-password" required></label><label>${esc(t('password'))}<input type="password" name="password" minlength="12" autocomplete="new-password" required></label><label>${esc(t('confirm'))}<input type="password" name="password_confirmation" autocomplete="new-password" required></label><div class="form-feedback" role="status"></div><button class="button-dark btn btn-primary" type="submit">${esc(t('changePassword'))}</button></form></section>`);
      }
    }
    if (state.page === 'seller' && state.token) {
      document.querySelectorAll('[data-form="seller-order"]').forEach((form) => {
        const item = state.sellerOrders.flatMap((order) => order.items || []).find((entry) => String(entry.id) === String(form.dataset.item));
        if (item && !item.is_demo) form.insertAdjacentHTML('afterbegin', `<label>${esc(t('carrier'))}<input name="shipment_carrier" maxlength="120" value="${esc(item.shipment_carrier || '')}" required></label><label>${esc(t('trackingNumber'))}<input name="tracking_number" maxlength="160" value="${esc(item.tracking_number || '')}" required></label><label>${esc(t('trackingUrl'))}<input type="url" name="tracking_url" placeholder="https://" value="${esc(item.tracking_url || '')}"></label>`);
      });
    }
    if (state.page === 'account' && state.token && state.user) {
      const account = document.querySelector('.account-panel');
      if (account) account.insertAdjacentHTML('beforeend', `<section class="workspace-panel"><h2>${esc(t('notifications'))}</h2><p>${esc(t('emailDelivery'))}: ${state.emailDeliveryAvailable ? 'configured' : esc(t('emailUnavailable'))}</p>${state.notifications.map((item) => `<article class="seller-listing"><div><strong>${esc(item.data?.title || item.type || 'Notification')}</strong><small>${esc(item.data?.message || '')} · ${esc(item.created_at || '')}</small></div>${item.read_at ? '' : `<button type="button" class="text-button" data-action="notification-read" data-id="${esc(item.id)}">${esc(t('markRead'))}</button>`}</article>`).join('') || `<p>${esc(t('noNotifications'))}</p>`}</section>`);
    }
    if (state.page === 'orders' && state.activeOrder) {
      const panel = document.querySelector('.order-detail-panel');
      const shipments = (state.activeOrder.items || []).filter((item) => item.tracking_number || item.shipment_carrier);
      if (panel && shipments.length) panel.insertAdjacentHTML('beforeend', shipments.map((item) => `<p>${esc(t('carrier'))}: ${esc(item.shipment_carrier || '')} · ${esc(t('trackingNumber'))}: ${esc(item.tracking_number || '')}${item.tracking_url ? ` · <a href="${esc(item.tracking_url)}" target="_blank" rel="noopener noreferrer">${esc(t('trackShipment'))}</a>` : ''}</p>`).join(''));
      if (panel) {
        const shipmentOptions = state.activeOrder.shipments || [];
        if (shipmentOptions.length) panel.insertAdjacentHTML('beforeend', `<section><h3>${esc(t('deliveryOptions'))}</h3>${shipmentOptions.map((shipment) => `<p>${esc(shipment.method_name)} · ${money(shipment.fee, shipment.currency)}${shipment.minimum_delivery_days !== null && shipment.maximum_delivery_days !== null ? ` · ${esc(shipment.minimum_delivery_days)}–${esc(shipment.maximum_delivery_days)} ${esc(t('deliveryEstimate'))}` : ''}</p>`).join('')}</section>`);
        const history = state.activeOrder.status_history || [];
        panel.insertAdjacentHTML('beforeend', `<section><h3>${esc(t('orderTimeline'))}</h3>${history.map((entry) => `<p>${esc(entry.created_at || '')} · ${esc(displayStatus(entry.to_status))} · ${esc(entry.actor?.name || 'System')}${entry.note ? ` · ${esc(entry.note)}` : ''}</p>`).join('') || `<p>${esc(t('noStatusHistory'))}</p>`}</section><p>${esc(t('subtotal'))}: ${money(state.activeOrder.subtotal, state.activeOrder.currency)} · ${esc(t('shippingTotal'))}: ${money(state.activeOrder.shipping_total || 0, state.activeOrder.currency)} · ${esc(t('total'))}: <strong>${money(state.activeOrder.total ?? state.activeOrder.subtotal, state.activeOrder.currency)}</strong></p>`);
        for (const returnCase of state.buyerReturns.filter((entry) => String(entry.order_id) === String(state.activeOrder.id))) panel.insertAdjacentHTML('beforeend', `<p>Return for item #${esc(returnCase.order_item_id)}: ${esc(returnCase.status)}${returnCase.refund ? ` · refund ${esc(returnCase.refund.status)} (not provider-confirmed)` : ''}</p>`);
        if (state.activeOrder.status === 'delivered' && !state.activeOrder.is_demo) {
          for (const item of (state.activeOrder.items || []).filter((entry) => !state.buyerReturns.some((r) => String(r.order_item_id) === String(entry.id) && !['rejected', 'closed'].includes(r.status)))) panel.insertAdjacentHTML('beforeend', `<form class="data-form" data-form="return-request" data-order="${esc(state.activeOrder.id)}" data-item="${esc(item.id)}"><label>Return reason for ${esc(item.title)}<textarea name="reason" minlength="10" maxlength="3000" required></textarea></label><button type="submit">Request return</button></form>`);
        }
      }
    }
    if (state.page === 'seller' && isSeller()) {
      const root = document.querySelector('.market-section');
      if (root) root.insertAdjacentHTML('beforeend', `<section class="workspace-panel"><h2>Return requests</h2>${state.sellerReturns.map((item) => `<article class="seller-order"><strong>Order #${esc(item.order_id)} · ${esc(item.item?.title || 'Item')}</strong><p>${esc(item.reason || '')} · ${esc(item.status)}</p>${item.status === 'requested' ? `<button type="button" data-action="seller-return" data-id="${esc(item.id)}" data-status="approved">Approve</button> <button type="button" data-action="seller-return" data-id="${esc(item.id)}" data-status="rejected">Reject</button>` : ''}${item.status === 'approved' ? `<button type="button" data-action="seller-return" data-id="${esc(item.id)}" data-status="received">Mark received</button>` : ''}</article>`).join('') || '<p>No return requests.</p>'}</section>`);
    }
    if (state.page === 'admin' && isAdmin()) {
      const root = document.querySelector('.admin-dashboard');
      if (root && state.adminSettings) {
        const business = state.adminSettings.business || {};
        const tax = state.adminSettings.tax || {};
        const commission = state.adminSettings.commission || {};
        const requirements = state.paymentReadiness?.requirements || {};
        root.insertAdjacentHTML('beforeend', `<section class="workspace-panel"><h2>Business, tax, commission and payment readiness</h2><p>Business and legal values stay blank until supplied. Configuration is not legal/tax advice and commission settings do not create seller payouts.</p><form class="data-form" data-form="admin-settings"><h3>Business identity and customer support</h3><div class="form-row">${[['name','Display name'],['legal_name','Legal name'],['country_of_registration','Registration country (ISO alpha-2)'],['registration_number','Registration number'],['tax_number','Tax number'],['vat_number','VAT number'],['support_email','Support email'],['support_phone','Support phone'],['website_url','Website URL'],['logo_url','Logo URL'],['company_address','Company address'],['impressum_url','Impressum URL'],['privacy_policy_url','Privacy policy URL'],['terms_url','Terms URL'],['returns_url','Returns information URL']].map(([key,label]) => `<label>${esc(label)}<input name="business.${key}" value="${esc(business[key] || '')}" maxlength="2048"></label>`).join('')}</div><h3>Tax (operator supplied; no rate is assumed)</h3><div class="form-row"><label>Tax configuration<select name="tax.enabled"><option value="">Not configured</option><option value="true" ${tax.enabled === true ? 'selected' : ''}>Enabled</option><option value="false" ${tax.enabled === false ? 'selected' : ''}>Disabled</option></select></label><label>Rate percent<input name="tax.rate_percent" type="number" min="0" max="100" step="0.001" value="${esc(tax.rate_percent ?? '')}"></label><label>Prices include tax?<select name="tax.vat_included"><option value="">Not configured</option><option value="true" ${tax.vat_included === true ? 'selected' : ''}>Yes</option><option value="false" ${tax.vat_included === false ? 'selected' : ''}>No</option></select></label></div><h3>Commission (no payout is configured)</h3><label>Commission percent<input name="commission.percent" type="number" min="0" max="100" step="0.001" value="${esc(commission.percent ?? '')}"></label><div class="form-feedback"></div><button type="submit">Save business configuration</button></form><h3>Payment readiness · ${esc(state.paymentReadiness?.provider || 'not selected')} · ${esc(state.paymentReadiness?.merchant_country || 'registration country missing')}</h3><p>Live checkout is ${state.paymentReadiness?.live_enabled ? 'enabled by configuration' : 'disabled'}. This app has not activated live payments.</p><ul>${Object.entries(requirements).map(([key, ready]) => `<li>${esc(key.replaceAll('_',' '))}: ${ready ? 'configured' : 'missing / not approved'}</li>`).join('')}</ul><p>${esc(state.paymentReadiness?.fees || '')}</p></section>`);
      }
      if (root) root.insertAdjacentHTML('beforeend', `<section class="workspace-panel"><h2>Shipping configuration</h2><p>Enter rates and delivery estimates confirmed by the business. A shipping method must be assigned to one seller.</p><form class="data-form" data-form="admin-shipping"><label>Seller ID<input name="seller_id" type="number" min="1" required></label><label>Method name<input name="name" maxlength="120" required></label><div class="form-row"><label>Fee (EUR)<input name="fee" type="number" min="0" step="0.01" required></label><label>Minimum days<input name="minimum_delivery_days" type="number" min="0" max="365"></label><label>Maximum days<input name="maximum_delivery_days" type="number" min="0" max="365"></label></div><div class="form-feedback"></div><button type="submit">Save shipping method</button></form>${state.adminShippingMethods.map((method) => `<article class="seller-listing"><span>${esc(method.name)} · ${money(method.fee, method.currency)} · seller ${esc(method.seller_id || 'all')}</span>${method.enabled ? `<button type="button" data-action="disable-shipping" data-id="${esc(method.id)}">Disable</button>` : 'Disabled'}</article>`).join('')}</section><section class="workspace-panel"><h2>Returns and refund oversight</h2>${state.adminReturns.map((item) => `<article class="seller-order"><strong>Order #${esc(item.order_id)} · ${esc(item.item?.title || 'Item')}</strong><p>${esc(item.reason || '')} · ${esc(item.status)}</p>${item.status === 'requested' ? `<button data-action="admin-return" data-id="${esc(item.id)}" data-status="approved">Approve</button> <button data-action="admin-return" data-id="${esc(item.id)}" data-status="rejected">Reject</button>` : ''}${item.status === 'approved' ? `<button data-action="admin-return" data-id="${esc(item.id)}" data-status="received">Mark received</button>` : ''}</article>`).join('') || '<p>No returns.</p>'}<h3>Refund records (provider processing separate)</h3>${state.adminRefunds.map((refund) => `<p>Order #${esc(refund.order_id)} · ${money(refund.amount, refund.currency)} · ${esc(refund.status)}${refund.provider_confirmed_at ? ` · verified ${esc(refund.provider_confirmed_at)}` : ''}</p>`).join('') || '<p>No refund records.</p>'}</section>`);
      if (root && state.adminRefunds.length) root.insertAdjacentHTML('beforeend', `<section class="workspace-panel"><h2>Gateway refund processing</h2><p>A submitted refund remains pending until a signed provider event confirms completion.</p>${state.adminRefunds.map((refund) => `<article class="seller-order"><p>Refund #${esc(refund.id)} · ${money(refund.amount, refund.currency)} · ${esc(refund.status)}</p>${refund.status === 'awaiting_gateway' && refund.return_request?.status === 'received' ? `<button type="button" data-action="process-refund" data-id="${esc(refund.id)}">Submit refund request</button>` : ''}${refund.status === 'initiation_unknown' ? '<p>Provider outcome is unknown; reconcile before any retry.</p>' : ''}</article>`).join('')}</section>`);
      if (root && isAdministrator()) root.insertAdjacentHTML('beforeend', `<section class="workspace-panel"><h2>Uncertain payment and refund initiations</h2><p>Reconciliation queries the existing provider reference. A new request is blocked unless provider evidence confirms the original was not created or processed. Live payment activation remains disabled.</p>${state.adminReconciliation.map((entry) => {
        const age = Number(entry.age_seconds || 0); const ageLabel = age < 3600 ? `${Math.floor(age / 60)}m` : `${Math.floor(age / 3600)}h ${Math.floor((age % 3600) / 60)}m`;
        const endpoint = entry.type === 'payment' ? 'payments' : 'refunds';
        return `<article class="seller-order"><strong>${esc(entry.type)} #${esc(entry.id)} · Order #${esc(entry.order_id ?? '—')}</strong><p>${money(entry.amount, entry.currency)} · ${esc(entry.currency)} · age ${esc(ageLabel)} · reference ${esc(entry.provider_reference || 'not returned')}</p><p>Status: ${esc(entry.status)} · latest: ${esc(entry.attempts?.[0]?.decision || 'not reconciled')}</p><button type="button" data-action="reconcile-initiation" data-kind="${esc(entry.type)}" data-id="${esc(entry.id)}">Reconcile with provider</button>${entry.retry_allowed ? `<button type="button" data-action="retry-initiation" data-kind="${esc(entry.type)}" data-id="${esc(entry.id)}">Retry verified unprocessed request</button>` : ''}${(entry.attempts || []).map((attempt) => `<small>Attempt ${esc(attempt.action)} · ${esc(attempt.decision || attempt.status)} · ${esc(attempt.operator?.name || 'operator removed')} · ${esc(attempt.started_at || '')}</small>`).join('<br>')}</article>`;
      }).join('') || '<p>No uncertain initiations.</p>'}</section>`);
    }
    if (state.page === 'cart' && state.checkoutOptions) {
      const form = document.querySelector('[data-form="checkout"]');
      if (form) {
        const addresses = state.checkoutOptions.addresses || [];
        const billing = addresses.filter((address) => address.is_billing);
        const delivery = addresses.filter((address) => address.is_delivery);
        const sellers = Object.entries(state.checkoutOptions.shipping_methods || {});
        const addressOptions = (list, key) => list.map((address) => `<option value="${esc(address.id)}" ${String(address.id) === String(state.checkoutSelections[key] || '') ? 'selected' : ''}>${esc(address.recipient)} · ${esc(address.line1)}, ${esc(address.postal_code)} ${esc(address.city)}</option>`).join('');
        const methodFields = sellers.map(([sellerId, methods]) => `<label>${esc(t('shippingMethod'))} · ${esc(state.cart?.items?.find((i) => String(i.listing?.seller?.id) === sellerId)?.listing?.seller?.name || '')}<select data-checkout-choice data-checkout-seller="${esc(sellerId)}">${methods.map((method) => `<option value="${esc(method.id)}" ${String(method.id) === String(state.checkoutSelections.shipping_methods?.[sellerId] || '') ? 'selected' : ''}>${esc(method.name)} · ${money(method.fee, method.currency)}${method.minimum_delivery_days !== null && method.maximum_delivery_days !== null ? ` · ${method.minimum_delivery_days}–${method.maximum_delivery_days} ${esc(t('days'))}` : ''}</option>`).join('')}</select></label>`).join('');
        form.insertAdjacentHTML('afterbegin', `<div class="checkout-selection"><label>${esc(t('billingAddress'))}<select name="billing_address_id" data-checkout-choice>${addressOptions(billing, 'billing_address_id')}</select></label><label>${esc(t('deliveryAddress'))}<select name="delivery_address_id" data-checkout-choice>${addressOptions(delivery, 'delivery_address_id')}</select></label>${methodFields}${billing.length && delivery.length && sellers.every(([, methods]) => methods.length) ? '' : `<p class="demo-data-note">${esc(t('checkoutConfigRequired'))} <button type="button" class="text-button" data-page="account">${esc(t('addresses'))}</button></p>`}${state.checkoutError ? `<p class="text-danger" role="alert">${esc(state.checkoutError)}</p>` : ''}${state.checkoutQuote ? `<p>${esc(t('shippingTotal'))}: ${money(state.checkoutQuote.shipping_total, state.checkoutQuote.currency)} · ${esc(t('total'))}: <strong>${money(state.checkoutQuote.total, state.checkoutQuote.currency)}</strong></p>` : ''}</div>`);
        const button = form.querySelector('button[type="submit"]');
        if (button && sellers.length && (!billing.length || !delivery.length || sellers.some(([, methods]) => !methods.length) || !state.checkoutQuote)) button.disabled = true;
      }
    }
  }
  let catalogRequest = 0;
  async function loadCatalog(page = state.catalogPage) {
    const requestId = ++catalogRequest;
    state.catalogPage = Math.max(1, Number(page) || 1);
    state.loading = true;
    state.demoLoading = true;
    state.error = '';
    state.catalogErrors = { categories: null, listings: null };
    render();
    const params = new URLSearchParams();
    if (state.query.trim()) params.set('q', state.query.trim());
    if (state.category) params.set('category', state.category);
    if (state.type) params.set('type', state.type);
    params.set('page', String(state.catalogPage));
    params.set('per_page', '12');
    const demoParams = new URLSearchParams(params);
    demoParams.set('page', String(state.demoPage));
    params.set('sort', state.sort);
    demoParams.set('sort', state.sort);
    const [categoryResult, listingResult, demoResult] = await Promise.allSettled([
      api('/categories'),
      api(`/listings?${params}`),
      api(`/catalog-demonstrations?${demoParams}`)
    ]);
    if (requestId !== catalogRequest) return;

    if (categoryResult.status === 'fulfilled' && Array.isArray(categoryResult.value?.categories)) {
      state.categories = categoryResult.value.categories;
    } else {
      state.catalogErrors.categories = categoryResult.status === 'rejected'
        ? categoryResult.reason
        : new Error('Invalid categories response');
    }

    if (listingResult.status === 'fulfilled' && Array.isArray(listingResult.value?.listings)) {
      state.listings = listingResult.value.listings;
      state.listingsPagination = listingResult.value.pagination || {};
    } else {
      state.catalogErrors.listings = listingResult.status === 'rejected'
        ? listingResult.reason
        : new Error('Invalid listings response');
      state.listings = [];
      state.listingsPagination = {};
    }
    if (demoResult.status === 'fulfilled' && Array.isArray(demoResult.value?.products)) {
      state.demoCatalog = demoResult.value.products;
      state.demoPagination = demoResult.value.pagination || {};
      state.demoError = null;
    } else {
      state.demoError = demoResult.status === 'rejected' ? demoResult.reason : new Error('Invalid catalogue demonstration response');
    }
    state.demoLoading = false;
    state.loading = false;
    render();
  }
  let demoCatalogRequest = 0;
  async function loadDemoCatalog(page = state.demoPage) {
    const requestId = ++demoCatalogRequest;
    state.demoPage = Math.max(1, Number(page) || 1);
    state.demoLoading = true;
    state.demoError = null;
    render();
    const params = new URLSearchParams({ page: String(state.demoPage), per_page: '12' });
    if (state.query.trim()) params.set('q', state.query.trim());
    if (state.category) params.set('category', state.category);
    if (state.type) params.set('type', state.type);
    try {
      const result = await api(`/catalog-demonstrations?${params}`);
      if (requestId !== demoCatalogRequest) return;
      if (!Array.isArray(result?.products)) throw new Error('Invalid catalogue demonstration response');
      state.demoCatalog = result.products;
      state.demoPagination = result.pagination || {};
    } catch (error) {
      if (requestId === demoCatalogRequest) state.demoError = error;
    }
    if (requestId === demoCatalogRequest) { state.demoLoading = false; render(); }
  }
  async function loadCart() {
    state.page = 'cart'; state.loading = true; state.error = ''; render();
    try {
      state.cart = await api('/cart');
      state.checkoutOptions = await api('/checkout/options');
      const addresses = state.checkoutOptions.addresses || [];
      state.checkoutSelections.billing_address_id = addresses.find((a) => a.is_default && a.is_billing)?.id || addresses.find((a) => a.is_billing)?.id || '';
      state.checkoutSelections.delivery_address_id = addresses.find((a) => a.is_default && a.is_delivery)?.id || addresses.find((a) => a.is_delivery)?.id || '';
      state.checkoutSelections.shipping_methods = Object.fromEntries(Object.entries(state.checkoutOptions.shipping_methods || {}).map(([seller, methods]) => [seller, methods[0]?.id || '']));
      await refreshCheckoutQuote();
    } catch (error) { state.error = error; state.checkoutError = safeApiMessage(error); }
    state.loading = false; render();
  }
  async function refreshCheckoutQuote() {
    document.querySelectorAll('[data-checkout-choice]').forEach((field) => {
      if (field.name === 'billing_address_id') state.checkoutSelections.billing_address_id = field.value;
      if (field.name === 'delivery_address_id') state.checkoutSelections.delivery_address_id = field.value;
      if (field.dataset.checkoutSeller) state.checkoutSelections.shipping_methods[field.dataset.checkoutSeller] = field.value;
    });
    try { state.checkoutQuote = await api('/checkout/quote', { method: 'POST', body: state.checkoutSelections }); state.checkoutError = ''; }
    catch (error) { state.checkoutQuote = null; state.checkoutError = safeApiMessage(error); }
  }
  async function loadOrders() {
    state.page = 'orders'; state.loading = true; state.error = ''; render();
    try {
      const [data, readiness] = await Promise.all([api('/orders'), api('/payments/readiness').catch(() => null)]);
      state.orders = data?.orders || data || [];
      state.paymentReadiness = readiness?.payments || null;
    } catch (error) { state.error = error; }
    state.loading = false; render();
  }
  async function loadSeller() {
    state.page = 'seller'; state.loading = true; state.error = '';
    if (!isSeller()) { state.loading = false; render(); return; }
    render();
    try {
      const [listings, orders, returns] = await Promise.all([api('/seller/listings'), api('/seller/orders'), api('/seller/returns')]);
      state.sellerListings = listings?.listings || listings || [];
      state.sellerStats = listings?.stats || {};
      state.sellerOrders = orders?.orders || orders || [];
      state.sellerReturns = returns?.returns || returns || [];
    } catch (error) { state.error = error; }
    state.loading = false; render();
  }
  async function loadAdmin(page = 1, query = state.adminQuery, usersPage = 1, usersQuery = state.adminUsersQuery, ordersPage = 1, ordersQuery = state.adminOrdersQuery) {
    state.page = 'admin'; state.loading = true; state.error = ''; render();
    try { await refreshUser(); }
    catch (error) { state.error = error; state.loading = false; render(); return; }
    if (!isAdmin()) { state.loading = false; render(); return; }
    state.adminQuery = query;
    const params = new URLSearchParams({ page: String(page), per_page: '20' });
    if (query.trim()) params.set('q', query.trim());
    if (state.adminStatus) params.set('status', state.adminStatus);
    if (state.adminType) params.set('type', state.adminType);
    if (state.adminCategory) params.set('category', state.adminCategory);
    state.adminUsersQuery = usersQuery;
    state.adminOrdersQuery = ordersQuery;
    const userParams = new URLSearchParams({ page: String(usersPage), per_page: '20' });
    if (usersQuery.trim()) userParams.set('q', usersQuery.trim());
    const orderParams = new URLSearchParams({ page: String(ordersPage), per_page: '20' });
    if (ordersQuery.trim()) orderParams.set('q', ordersQuery.trim());
    const demoParams = new URLSearchParams({ page: String(state.adminDemoPage), per_page: '20' });
    if (query.trim()) demoParams.set('q', query.trim());
    if (state.adminCategory) demoParams.set('category', state.adminCategory);
    try {
      const [dashboard, pending, sellers, listings, users, orders, categories, shipping, returns, refunds, settings, reconciliation] = await Promise.all([api('/admin/dashboard'), api('/admin/listings/pending'), api('/admin/sellers/pending'), api(`/admin/listings?${params}`), api(`/admin/users?${userParams}`), api(`/admin/orders?${orderParams}`), api('/admin/categories'), api('/admin/shipping-methods'), api('/admin/returns'), api('/admin/refunds'), api('/admin/settings'), isAdministrator() ? api('/admin/payments/reconciliation') : Promise.resolve({ items: [] })]);
      state.adminDashboard = dashboard?.dashboard || dashboard;
      state.pendingListings = pending?.listings || pending || [];
      state.pendingSellers = sellers?.sellers || sellers || [];
      state.adminListings = listings?.listings || [];
      state.adminSellers = listings?.sellers || [];
      if (Array.isArray(listings?.categories) && listings.categories.length) state.categories = listings.categories;
      state.adminPagination = listings?.pagination || {};
      state.adminUsers = users?.users || [];
      state.adminUsersPagination = users?.pagination || {};
      state.adminOrders = orders?.orders || [];
      state.adminOrdersPagination = orders?.pagination || {};
      state.adminCategories = categories?.categories || [];
      state.adminShippingMethods = shipping?.methods || [];
      state.adminReturns = returns?.returns?.data || returns?.returns || [];
      state.adminRefunds = refunds?.refunds?.data || refunds?.refunds || [];
      state.adminReconciliation = reconciliation?.items || [];
      state.adminSettings = settings?.settings || null;
      state.paymentReadiness = settings?.payment_readiness || null;
      try {
        const demoProducts = await api(`/admin/catalog-demonstrations?${demoParams}`);
        state.adminDemoProducts = demoProducts?.products || [];
        state.adminDemoPagination = demoProducts?.pagination || {};
        state.adminDemoError = null;
      } catch (error) {
        state.adminDemoError = error;
      }
      state.categoryImageReviewError = null;
      if (isLocalDevelopment() && isAdministrator()) {
        try {
          const review = await api('/admin/category-image-reviews');
          state.categoryImageReviewCandidates = Array.isArray(review?.candidates) ? review.candidates : [];
          state.categoryImageReviewSummary = review?.summary || { total: 0, pending: 0, approved: 0, rejected: 0 };
        } catch (error) {
          state.categoryImageReviewCandidates = [];
          state.categoryImageReviewSummary = { total: 0, pending: 0, approved: 0, rejected: 0 };
          state.categoryImageReviewError = error;
        }
      } else {
        state.categoryImageReviewCandidates = [];
        state.categoryImageReviewSummary = { total: 0, pending: 0, approved: 0, rejected: 0 };
        state.categoryImageReviewError = null;
      }
    } catch (error) { state.error = error; }
    state.loading = false; render();
  }
  async function loadDetail(identifier) {
    state.page = 'detail'; state.loading = true; state.error = ''; state.listing = null; state.slide = 0; render();
    try { const data = await api(`/listings/${encodeURIComponent(identifier)}`); state.listing = data?.listing || data; }
    catch (error) { state.error = error; }
    state.loading = false; render();
  }

  async function showOrderDetails(identifier) {
    try {
      const [result, returns] = await Promise.all([api(`/orders/${encodeURIComponent(identifier)}`), api('/returns')]);
      state.activeOrder = result?.order || result;
      state.buyerReturns = returns?.returns || [];
      state.page = 'orders';
      render();
      document.querySelector('.order-detail-panel')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } catch (error) { notify(safeApiMessage(error), true); }
  }
  async function refreshUser() {
    const data = await api('/user');
    state.user = data?.user || data;
    try { const wishlist = await api('/wishlist'); state.wishlist = (wishlist?.listings || []).map((item) => String(item.id)); } catch { state.wishlist = []; }
  }
  async function loadAccount() {
    state.page = state.token ? 'account' : 'login';
    if (state.token) { try { const [data, notifications] = await Promise.all([api('/addresses'), api('/notifications')]); state.addresses = data?.addresses || []; state.notifications = notifications?.notifications || []; state.emailDeliveryAvailable = Boolean(notifications?.email_delivery_available); } catch (error) { state.error = error; } }
    render();
  }
  async function refreshCart() {
    if (!state.token) { state.cart = null; return; }
    state.cart = await api('/cart');
  }
  async function go(page) {
    if (page === 'store') { state.page = 'store'; loadCatalog(); return; }
    if (page === 'login' || page === 'account') { return loadAccount(); }
    if (page === 'forgot-password') { state.page = page; render(); return; }
    if (page === 'cart') return loadCart();
    if (page === 'orders') return loadOrders();
    if (page === 'seller') return loadSeller();
    if (page === 'admin') return loadAdmin();
  }
  document.addEventListener('click', async (event) => {
    const wishlistButton = event.target.closest('[data-wishlist]');
    if (wishlistButton) {
      if (!state.token) { state.page = 'login'; render(); notify(t('loginRequired'), true); return; }
      const identifier = String(wishlistButton.dataset.wishlist);
      try { const result = await api(`/wishlist/${encodeURIComponent(identifier)}`, { method: 'PUT' }); state.wishlist = result.saved ? [...state.wishlist, identifier] : state.wishlist.filter((id) => id !== identifier); render(); }
      catch (error) { notify(safeApiMessage(error), true); }
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
    if (category) { state.category = category.dataset.category; state.catalogPage = 1; state.demoPage = 1; state.page = 'store'; await loadCatalog(1); document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' }); return; }
    const fashionQuery = event.target.closest('[data-fashion-query]');
    if (fashionQuery) {
      state.query = fashionQuery.dataset.fashionQuery;
      state.category = '';
      state.type = '';
      state.catalogPage = 1;
      state.demoPage = 1;
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
      state.catalogPage = 1;
      state.demoPage = 1;
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
    if (action.dataset.action === 'view-order') { showOrderDetails(action.dataset.id); return; }
    if (action.dataset.action === 'pay-order') {
      try {
        const result = await api(`/orders/${encodeURIComponent(action.dataset.id)}/payment-checkout`, { method: 'POST', body: {} });
        const checkoutUrl = new URL(result?.checkout_url || '');
        if (checkoutUrl.protocol !== 'https:') throw new Error(t('requestFailed'));
        window.location.assign(checkoutUrl.href);
      } catch (error) { notify(safeApiMessage(error), true); await loadOrders(); }
      return;
    }
    if (action.dataset.action === 'close-order-details') { state.activeOrder = null; render(); return; }
    if (action.dataset.action === 'cancel-order') {
      if (!confirm(t('cancelConfirm'))) return;
      try {
        await api(`/orders/${encodeURIComponent(action.dataset.id)}/cancel`, { method: 'POST' });
        state.activeOrder = null;
        notify(t('cancelOrder'));
        await loadOrders();
      } catch (error) { notify(safeApiMessage(error), true); }
      return;
    }
    if (action.dataset.action === 'notification-read') {
      try { await api(`/notifications/${encodeURIComponent(action.dataset.id)}/read`, { method: 'POST' }); await loadAccount(); }
      catch (error) { notify(safeApiMessage(error), true); }
      return;
    }
    if (action.dataset.action === 'seller-return' || action.dataset.action === 'admin-return') {
      const admin = action.dataset.action === 'admin-return';
      const decision = action.dataset.status === 'approved' ? 'approve' : action.dataset.status === 'rejected' ? 'reject' : 'received';
      try {
        await api(`/${admin ? 'admin' : 'seller'}/returns/${encodeURIComponent(action.dataset.id)}`, { method: 'PATCH', body: { decision } });
        notify(decision === 'approve' ? 'Return approved; refund awaits gateway processing.' : decision === 'reject' ? 'Return rejected.' : 'Return receipt recorded; no money is confirmed refunded.');
        if (admin) await loadAdmin(); else await loadSeller();
      } catch (error) { notify(safeApiMessage(error), true); }
      return;
    }
    if (action.dataset.action === 'disable-shipping') {
      try { await api(`/admin/shipping-methods/${encodeURIComponent(action.dataset.id)}`, { method: 'DELETE' }); await loadAdmin(); }
      catch (error) { notify(safeApiMessage(error), true); }
      return;
    }
    if (action.dataset.action === 'process-refund') {
      try { await api(`/admin/refunds/${encodeURIComponent(action.dataset.id)}/process`, { method: 'POST', body: {} }); notify('Refund request sent; provider confirmation is still pending.'); await loadAdmin(); }
      catch (error) { notify(safeApiMessage(error), true); }
      return;
    }
    if (action.dataset.action === 'reconcile-initiation' || action.dataset.action === 'retry-initiation') {
      const type = action.dataset.kind === 'refund' ? 'refunds' : 'payments';
      const verb = action.dataset.action === 'retry-initiation' ? 'retry' : 'reconcile';
      try {
        const result = await api(`/admin/${type}/${encodeURIComponent(action.dataset.id)}/${verb}`, { method: 'POST', body: {} });
        const decision = result?.attempt?.decision || 'provider_error';
        notify(`Provider reconciliation: ${decision.replaceAll('_', ' ')}. No payment or refund is reported successful unless verified.`);
        await loadAdmin();
      } catch (error) { notify(safeApiMessage(error), true); await loadAdmin(); }
      return;
    }
    if (action.dataset.action === 'retry-seller') loadSeller();
    if (action.dataset.action === 'retry-admin') loadAdmin();
    if (action.dataset.action === 'edit-admin-listing') {
      state.adminListingEdit = state.adminListings.find((listing) => String(listing.id) === action.dataset.id) || null;
      render();
    }
    if (action.dataset.action === 'edit-admin-category') {
      state.adminCategoryEdit = state.adminCategories.find((category) => String(category.id) === action.dataset.id) || null;
      render();
    }
    if (action.dataset.action === 'cancel-admin-category') { state.adminCategoryEdit = null; render(); }
    if (action.dataset.action === 'cancel-admin-listing') { state.adminListingEdit = null; render(); }
    if (action.dataset.action === 'admin-listings-page') loadAdmin(Number(action.dataset.page), state.adminQuery);
    if (action.dataset.action === 'admin-users-page') loadAdmin(1, state.adminQuery, Number(action.dataset.page), state.adminUsersQuery);
    if (action.dataset.action === 'admin-orders-page') loadAdmin(1, state.adminQuery, 1, state.adminUsersQuery, Number(action.dataset.page), state.adminOrdersQuery);
    if (action.dataset.action === 'admin-demo-page') { state.adminDemoPage = Number(action.dataset.page) || 1; loadAdmin(); return; }
    if (action.dataset.action === 'demo-catalog-page') { loadDemoCatalog(Number(action.dataset.page)); return; }
    if (action.dataset.action === 'delete-admin-category') {
      const category = state.adminCategories.find((item) => String(item.id) === action.dataset.id);
      if (!category || !confirm(`${t('confirmCategoryDelete')}\n${category.name}`)) return;
      try { await api(`/admin/categories/${encodeURIComponent(category.id)}`, { method: 'DELETE' }); state.adminCategoryEdit = null; notify(t('deleted')); await loadAdmin(); }
      catch (error) { notify(safeApiMessage(error), true); }
    }
    if (action.dataset.action === 'catalog-page') {
      const nextPage = Number(action.dataset.page) || 1;
      await loadCatalog(nextPage);
      document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' });
    }
    if (action.dataset.action === 'delete-admin-listing') {
      const listing = state.adminListings.find((item) => String(item.id) === action.dataset.id);
      if (!listing || !confirm(`${t('listingDeleteConfirm')}\n${listing.title}`)) return;
      try { await api(`/admin/listings/${encodeURIComponent(listing.id)}`, { method: 'DELETE' }); state.adminListingEdit = null; notify(t('deleted')); loadAdmin(); }
      catch (error) { notify(safeApiMessage(error), true); }
    }
    if (action.dataset.action === 'toggle-demo-homepage') {
      try {
        await api(`/admin/catalog-demonstrations/${encodeURIComponent(action.dataset.id)}`, { method: 'PATCH', body: { show_on_homepage: action.dataset.value === '1' } });
        notify(t('demoVisibilitySaved'));
        await loadAdmin();
      } catch (error) { notify(safeApiMessage(error), true); }
      return;
    }
    if (action.dataset.action === 'delete-demo-product') {
      const product = state.adminDemoProducts.find((item) => String(item.id) === action.dataset.id);
      if (!product || !confirm(`${t('demoDeleteConfirm')}\n${product.title}`)) return;
      try { await api(`/admin/catalog-demonstrations/${encodeURIComponent(product.id)}`, { method: 'DELETE' }); notify(t('demoDeleted')); await loadAdmin(); }
      catch (error) { notify(safeApiMessage(error), true); }
      return;
    }
    if (action.dataset.action === 'zoom-open') { state.zoomOpen = true; render(); document.querySelector('.lightbox-close')?.focus(); return; }
    if (action.dataset.action === 'zoom-close') { state.zoomOpen = false; render(); document.querySelector('[data-action="zoom-open"]')?.focus(); return; }
    if (action.dataset.action === 'slide' && state.listing) { const length = state.listing.images?.length || 1; state.slide = (state.slide + Number(action.dataset.delta) + length) % length; render(); }
    if (action.dataset.action === 'slide-to') { state.slide = Number(action.dataset.index) || 0; render(); }
    if (action.dataset.action === 'toggle-listing-field') {
      try {
        const field = action.dataset.field;
        if (!['is_hidden', 'is_featured'].includes(field)) throw new Error(t('requestFailed'));
        await api(`/admin/listings/${encodeURIComponent(action.dataset.id)}`, { method: 'PATCH', body: { [field]: action.dataset.value === '1' } });
        await loadAdmin();
      } catch (error) { notify(safeApiMessage(error), true); }
      return;
    }
    if (action.dataset.action === 'admin-image-primary' || action.dataset.action === 'admin-image-move') {
      try {
        const listing = state.adminListings.find((item) => String(item.id) === String(action.dataset.listing));
        const gallery = Array.isArray(listing?.image_gallery) ? [...listing.image_gallery] : [];
        const imageIndex = gallery.findIndex((photo) => String(photo.id) === String(action.dataset.image));
        if (imageIndex < 0) throw new Error(t('requestFailed'));
        if (action.dataset.action === 'admin-image-move') {
          const destination = imageIndex + Number(action.dataset.delta);
          if (destination < 0 || destination >= gallery.length) return;
          [gallery[imageIndex], gallery[destination]] = [gallery[destination], gallery[imageIndex]];
        }
        const primaryId = action.dataset.action === 'admin-image-primary' ? Number(action.dataset.image)
          : Number(gallery.find((photo) => photo.is_primary)?.id || gallery[0]?.id);
        await api(`/admin/listings/${encodeURIComponent(listing.id)}/images/order`, { method: 'PATCH', body: { image_ids: gallery.map((photo) => Number(photo.id)), primary_image_id: primaryId } });
        await loadAdmin();
      } catch (error) { notify(safeApiMessage(error), true); }
      return;
    }
    if (action.dataset.action === 'admin-image-remove') {
      if (!confirm(t('removeImage') + '?')) return;
      try {
        await api(`/admin/listings/${encodeURIComponent(action.dataset.listing)}/images/${encodeURIComponent(action.dataset.image)}`, { method: 'DELETE' });
        await loadAdmin();
      } catch (error) { notify(safeApiMessage(error), true); }
      return;
    }
    if (['seller-image-primary', 'seller-image-move'].includes(action.dataset.action)) {
      try {
        const listing = state.sellerListings.find((item) => String(item.id) === String(action.dataset.listing));
        const gallery = Array.isArray(listing?.image_gallery) ? [...listing.image_gallery] : [];
        const imageIndex = gallery.findIndex((photo) => String(photo.id) === String(action.dataset.image));
        if (imageIndex < 0) throw new Error(t('requestFailed'));
        if (action.dataset.action === 'seller-image-move') {
          const destination = imageIndex + Number(action.dataset.delta);
          if (destination < 0 || destination >= gallery.length) return;
          [gallery[imageIndex], gallery[destination]] = [gallery[destination], gallery[imageIndex]];
        }
        const primaryId = action.dataset.action === 'seller-image-primary' ? Number(action.dataset.image)
          : Number(gallery.find((photo) => photo.is_primary)?.id || gallery[0]?.id);
        await api(`/seller/listings/${encodeURIComponent(listing.id)}/images/order`, { method: 'PATCH', body: { image_ids: gallery.map((photo) => Number(photo.id)), primary_image_id: primaryId } });
        await loadSeller();
      } catch (error) { notify(safeApiMessage(error), true); }
      return;
    }
    if (action.dataset.action === 'seller-image-remove') {
      if (!confirm(t('removeImage') + '?')) return;
      try {
        await api(`/seller/listings/${encodeURIComponent(action.dataset.listing)}/images/${encodeURIComponent(action.dataset.image)}`, { method: 'DELETE' });
        await loadSeller();
      } catch (error) { notify(safeApiMessage(error), true); }
      return;
    }
    if (action.dataset.action === 'duplicate-distinct' || action.dataset.action === 'duplicate-archive') {
      const decision = action.dataset.action === 'duplicate-distinct' ? 'distinct' : 'archive';
      if (decision === 'archive' && !confirm(t('archive') + '?')) return;
      try {
        await api(`/admin/listings/${encodeURIComponent(action.dataset.id)}/duplicate-review`, { method: 'POST', body: { decision } });
        await loadAdmin();
      } catch (error) { notify(safeApiMessage(error), true); }
      return;
    }
    if (action.dataset.action === 'add-cart') {
      if (!state.token) { state.page = 'login'; render(); return; }
      try { await api('/cart/items', { method: 'POST', body: { listing_id: action.dataset.id, quantity: 1 } }); state.cart = await api('/cart'); render(); notify(t('addCart')); }
      catch (error) { notify(safeApiMessage(error), true); }
    }
    if (action.dataset.action === 'toggle-seller-visibility') {
      try {
        await api(`/seller/listings/${encodeURIComponent(action.dataset.id)}/visibility`, { method: 'PATCH', body: { is_hidden: action.dataset.value === '1' } });
        await loadSeller();
        notify(t(action.dataset.value === '1' ? 'hiddenProduct' : 'showHomepage'));
      } catch (error) { notify(safeApiMessage(error), true); }
      return;
    }
    if (action.dataset.action === 'remove-cart') {
      try { await api(`/cart/items/${encodeURIComponent(action.dataset.id)}`, { method: 'DELETE' }); loadCart(); }
      catch (error) { notify(safeApiMessage(error), true); }
    }
    if (action.dataset.action === 'logout') {
      try {
        await api('/logout', { method: 'POST' });
        state.token = null; state.user = null; state.cart = null; state.orders = []; state.page = 'store';
        try { sessionStorage.removeItem('mp-token'); } catch {}
        render();
      } catch (error) {
        if (!state.token) { state.user = null; state.cart = null; state.orders = []; state.page = 'store'; render(); }
        else notify(safeApiMessage(error), true);
      }
    }
    if (action.dataset.action === 'delete-address') {
      try { await api(`/addresses/${encodeURIComponent(action.dataset.id)}`, { method: 'DELETE' }); const data = await api('/addresses'); state.addresses = data.addresses || []; render(); }
      catch (error) { notify(safeApiMessage(error), true); }
      return;
    }
    if (action.dataset.action === 'send-verification') {
      try { await api('/email/verification-notification', { method: 'POST' }); notify(t('sendVerification')); }
      catch (error) { notify(safeApiMessage(error), true); }
      return;
    }
    if (action.dataset.action === 'edit-listing') {
      state.listingEdit = state.sellerListings.find((item) => String(item.id) === action.dataset.id) || null; render();
    }
    if (action.dataset.action === 'cancel-edit') { state.listingEdit = null; render(); }
    if (action.dataset.action === 'delete-listing') {
      if (!confirm(t('delete') + '?')) return;
      try { await api(`/seller/listings/${encodeURIComponent(action.dataset.id)}`, { method: 'DELETE' }); notify(t('deleted')); loadSeller(); }
      catch (error) { notify(safeApiMessage(error), true); }
    }
    if (action.dataset.action === 'review-listing') {
      try {
        await api(`/admin/listings/${encodeURIComponent(action.dataset.id)}/review`, { method: 'POST', body: { decision: action.dataset.status } });
        notify(t(action.dataset.status === 'approved' ? 'approve' : 'reject')); loadAdmin();
      } catch (error) { notify(safeApiMessage(error), true); }
    }
    if (action.dataset.action === 'review-seller') {
      try {
        await api(`/admin/sellers/${encodeURIComponent(action.dataset.id)}/review`, { method: 'POST', body: { decision: action.dataset.decision } });
        notify(t(action.dataset.decision === 'approved' ? 'approve' : 'reject')); loadAdmin();
      } catch (error) { notify(safeApiMessage(error), true); }
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
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && state.zoomOpen) { state.zoomOpen = false; render(); }
  });
  document.addEventListener('change', async (event) => {
    if (event.target.closest('[data-checkout-choice]')) { await refreshCheckoutQuote(); render(); return; }
    const filter = event.target.closest('[data-filter="type"]');
    if (filter) { state.type = filter.value; state.catalogPage = 1; state.demoPage = 1; loadCatalog(1); return; }
    const sort = event.target.closest('[data-filter="sort"]');
    if (sort) { state.sort = sort.value; state.catalogPage = 1; state.demoPage = 1; loadCatalog(1); return; }
    const demoRole = event.target.closest('[data-demo-role]');
    if (demoRole && demoRole.value) {
      try {
        const result = await api('/demo-access', { method: 'POST', body: { role: demoRole.value } });
        state.token = result?.token || null;
        state.user = result?.user || null;
        state.cart = null;
        state.orders = [];
        state.page = 'store';
        if (state.token) sessionStorage.setItem('mp-token', state.token);
        else sessionStorage.removeItem('mp-token');
        await refreshCart();
        render();
        notify(`${t('demoSwitch')}: ${state.user?.name || ''}`);
      } catch (error) { notify(safeApiMessage(error), true); }
      return;
    }
    const language = event.target.closest('[data-setting="lang"]');
    if (language) { state.lang = language.value; localStorage.setItem('mp-lang', state.lang); render(); }
    const quantity = event.target.closest('[data-cart-quantity]');
    if (quantity) {
      const value = Math.max(1, Number(quantity.value) || 1);
      try { await api(`/cart/items/${encodeURIComponent(quantity.dataset.cartQuantity)}`, { method: 'PATCH', body: { quantity: value } }); loadCart(); }
      catch (error) { notify(safeApiMessage(error), true); }
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
        state.catalogPage = 1; state.demoPage = 1; state.page = 'store'; loadCatalog(1); return;
      }
      if (kind === 'admin-search') {
        state.adminStatus = String(values.get('status') || '');
        state.adminType = String(values.get('type') || '');
        state.adminCategory = String(values.get('category') || '');
        await loadAdmin(1, String(values.get('q') || '').trim());
        return;
      }
      if (kind === 'admin-users-search') {
        await loadAdmin(1, state.adminQuery, 1, String(values.get('q') || '').trim());
        return;
      }
      if (kind === 'admin-user-role') {
        if (!isAdministrator()) throw new Error(t('forbidden'));
        const role = String(values.get('role') || '');
        if (role === 'admin' && !window.confirm(t('roleChangeConfirm'))) return;
        await api(`/admin/users/${encodeURIComponent(form.dataset.id)}/role`, { method: 'PATCH', body: { role } });
        notify(t('roleUpdated'));
        await loadAdmin(Number(state.adminPagination.current_page) || 1, state.adminQuery, Number(state.adminUsersPagination.current_page) || 1, state.adminUsersQuery, Number(state.adminOrdersPagination.current_page) || 1, state.adminOrdersQuery);
        return;
      }
      if (kind === 'admin-orders-search') {
        await loadAdmin(1, state.adminQuery, 1, state.adminUsersQuery, 1, String(values.get('q') || '').trim());
        return;
      }
      if (kind === 'admin-category') {
        const existingId = state.adminCategoryEdit?.id;
        const body = { name: String(values.get('name') || '').trim() };
        const slug = String(values.get('slug') || '').trim();
        if (slug) body.slug = slug;
        await api(existingId ? `/admin/categories/${encodeURIComponent(existingId)}` : '/admin/categories', { method: existingId ? 'PATCH' : 'POST', body });
        state.adminCategoryEdit = null;
        notify(existingId ? t('updated') : t('created'));
        await loadAdmin();
        return;
      }
      if (kind === 'category-image-review') {
        if (!isLocalDevelopment() || !isAdministrator()) throw new Error(t('forbidden'));
        const slug = String(form.dataset.slug || '');
        const saved = await api(`/admin/category-image-reviews/${encodeURIComponent(slug)}`, {
          method: 'PATCH',
          body: { status: String(values.get('status') || 'pending'), note: String(values.get('note') || '').trim() }
        });
        state.categoryImageReviewCandidates = state.categoryImageReviewCandidates.map((candidate) => candidate.category_slug === slug
          ? { ...candidate, review_status: saved.review_status, review_note: saved.review_note, reviewed_at: saved.reviewed_at, reviewed_by: saved.reviewed_by }
          : candidate);
        state.categoryImageReviewSummary = state.categoryImageReviewCandidates.reduce((counts, candidate) => {
          counts.total += 1;
          const status = ['pending', 'approved', 'rejected'].includes(candidate.review_status) ? candidate.review_status : 'pending';
          counts[status] += 1;
          return counts;
        }, { total: 0, pending: 0, approved: 0, rejected: 0 });
        notify(t('reviewSaved'));
        render();
        return;
      }
      if (kind === 'admin-listing') {
        const existingId = state.adminListingEdit?.id;
        const imageFiles = values.getAll('images').filter((file) => file instanceof File && file.size > 0);
        const body = { seller_id: values.get('seller_id'), title: String(values.get('title') || '').trim(), description: String(values.get('description') || '').trim(), type: String(values.get('type') || 'product'), category_id: values.get('category_id'), price: Number(values.get('price')), currency: String(values.get('currency') || 'EUR').toUpperCase(), stock: Number(values.get('stock') || 0), status: String(values.get('status') || 'pending_review'), brand: String(values.get('brand') || '').trim() || null, model_number: String(values.get('model_number') || '').trim() || null, sku: String(values.get('sku') || '').trim() || null, gtin: String(values.get('gtin') || '').trim() || null, specifications: JSON.parse(String(values.get('specifications') || '{}') || '{}'), variant_options: JSON.parse(String(values.get('variant_options') || '[]') || '[]'), is_featured: values.has('is_featured'), is_hidden: values.has('is_hidden') };
        const result = await api(existingId ? `/admin/listings/${encodeURIComponent(existingId)}` : '/admin/listings', { method: existingId ? 'PATCH' : 'POST', body });
        const listing = result?.listing || result;
        if (listing?.id) state.adminListingEdit = listing;
        if (listing?.id && imageFiles.length) {
          const imageForm = new FormData();
          for (const file of imageFiles) imageForm.append('images[]', file);
          imageForm.append('rights_source', String(values.get('rights_source') || ''));
          imageForm.append('rights_license', String(values.get('rights_license') || ''));
          await api(`/admin/listings/${encodeURIComponent(listing.id)}/images`, { method: 'POST', body: imageForm });
        }
        state.adminListingEdit = null;
        notify(existingId ? t('updated') : t('created'));
        await loadAdmin();
        return;
      }
      if (kind === 'admin-image-replace' || kind === 'seller-image-replace') {
        const admin = kind === 'admin-image-replace';
        const listingId = form.dataset.listing;
        const imageId = form.dataset.image;
        const file = values.get('image');
        if (!(file instanceof File) || !file.size) throw new Error(t('requestFailed'));
        const imageForm = new FormData();
        imageForm.append('image', file);
        imageForm.append('rights_source', String(values.get('rights_source') || ''));
        imageForm.append('rights_license', String(values.get('rights_license') || ''));
        await api(`/${admin ? 'admin' : 'seller'}/listings/${encodeURIComponent(listingId)}/images/${encodeURIComponent(imageId)}`, { method: 'PUT', body: imageForm });
        notify(t('updated'));
        if (admin) await loadAdmin(); else await loadSeller();
        return;
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
        try { await refreshCart(); } catch { state.cart = null; }
        state.page = 'account'; render(); return;
      }
      if (kind === 'forgot-password') {
        await api('/forgot-password', { method: 'POST', body: { email: String(values.get('email') || '').trim() } });
        showFeedback(t('resetRequestSent')); return;
      }
      if (kind === 'reset-password') {
        await api('/reset-password', { method: 'POST', body: { token: String(values.get('token') || ''), email: String(values.get('email') || '').trim(), password: String(values.get('password') || ''), password_confirmation: String(values.get('password_confirmation') || '') } });
        state.resetToken = ''; state.resetEmail = ''; state.page = 'login'; render(); notify(t('passwordResetDone')); return;
      }
      if (kind === 'change-password') {
        await api('/user/password', { method: 'PUT', body: { current_password: String(values.get('current_password') || ''), password: String(values.get('password') || ''), password_confirmation: String(values.get('password_confirmation') || '') } });
        form.reset(); showFeedback(t('passwordChanged')); return;
      }
      if (kind === 'profile') {
        const data = await api('/user', { method: 'PATCH', body: { name: String(values.get('name') || '').trim(), email: String(values.get('email') || '').trim() } });
        state.user = data?.user || data || state.user; render(); notify(t('saved')); return;
      }
      if (kind === 'address') {
        const payload = Object.fromEntries(values.entries());
        payload.is_billing = values.has('is_billing'); payload.is_delivery = values.has('is_delivery');
        await api('/addresses', { method: 'POST', body: payload });
        const data = await api('/addresses'); state.addresses = data.addresses || []; render(); notify(t('saved')); return;
      }
      if (kind === 'checkout') {
        if (!state.checkoutQuote && (state.checkoutOptions?.shipping_methods && Object.keys(state.checkoutOptions.shipping_methods).length)) throw new Error(state.checkoutError || t('checkoutConfigRequired'));
        const data = await api('/orders', { method: 'POST', body: state.checkoutSelections });
        state.orderNotice = `${t('orderPlaced')} ${data?.order?.id || data?.id || ''} ${t('checkoutNote')}`;
        state.cart = null;
        await loadOrders();
        return;
      }
      if (kind === 'return-request') {
        const result = await api(`/orders/${encodeURIComponent(form.dataset.order)}/items/${encodeURIComponent(form.dataset.item)}/returns`, { method: 'POST', body: { reason: String(values.get('reason') || '').trim() } });
        notify(result?.message || 'Return request submitted; no refund has been issued.');
        await showOrderDetails(form.dataset.order);
        return;
      }
      if (kind === 'admin-shipping') {
        const body = { name: String(values.get('name') || '').trim(), fee: Number(values.get('fee')), currency: 'EUR', enabled: true };
        const sellerId = String(values.get('seller_id') || '').trim();
        const min = String(values.get('minimum_delivery_days') || '').trim();
        const max = String(values.get('maximum_delivery_days') || '').trim();
        if (sellerId) body.seller_id = Number(sellerId);
        if (min) body.minimum_delivery_days = Number(min);
        if (max) body.maximum_delivery_days = Number(max);
        await api('/admin/shipping-methods', { method: 'POST', body });
        notify('Shipping method saved.'); await loadAdmin(); return;
      }
      if (kind === 'admin-settings') {
        const value = (name) => String(values.get(name) ?? '').trim();
        const nullable = (name) => value(name) === '' ? null : value(name);
        const asBoolean = (name) => value(name) === '' ? null : value(name) === 'true';
        const businessKeys = ['name','legal_name','country_of_registration','registration_number','tax_number','vat_number','company_address','support_email','support_phone','website_url','logo_url','impressum_url','privacy_policy_url','terms_url','returns_url'];
        const business = Object.fromEntries(businessKeys.map((key) => [key, nullable(`business.${key}`)]));
        const rate = nullable('tax.rate_percent');
        const commissionPercent = nullable('commission.percent');
        await api('/admin/settings', { method: 'PUT', body: {
          business,
          tax: { enabled: asBoolean('tax.enabled'), rate_percent: rate === null ? null : Number(rate), vat_included: asBoolean('tax.vat_included') },
          commission: { percent: commissionPercent === null ? null : Number(commissionPercent) }
        } });
        notify('Business settings saved. Tax and commission values still require professional/business approval.');
        await loadAdmin(); return;
      }
      if (kind === 'admin-order-status') {
        await api(`/admin/orders/${encodeURIComponent(form.dataset.id)}/status`, { method: 'PATCH', body: { status: String(values.get('status') || ''), note: String(values.get('note') || '').trim() || null } });
        notify('Order status updated and recorded.'); await loadAdmin(); return;
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
        const body = { title: String(values.get('title') || '').trim(), description: String(values.get('description') || '').trim(), type: String(values.get('type') || 'product'), category_id: values.get('category_id'), price: Number(values.get('price')), currency: String(values.get('currency') || 'EUR').toUpperCase(), stock: Number(values.get('stock') || 0), brand: String(values.get('brand') || '').trim() || null, model_number: String(values.get('model_number') || '').trim() || null, sku: String(values.get('sku') || '').trim() || null, gtin: String(values.get('gtin') || '').trim() || null, supplier_name: String(values.get('supplier_name') || '').trim() || null, supplier_product_reference: String(values.get('supplier_product_reference') || '').trim() || null, specifications: JSON.parse(String(values.get('specifications') || '{}') || '{}'), variant_options: JSON.parse(String(values.get('variant_options') || '[]') || '[]') };
        const result = await api(id ? `/seller/listings/${encodeURIComponent(id)}` : '/seller/listings', { method: id ? 'PATCH' : 'POST', body });
        const listing = result?.listing || result;
        state.listingEdit = null;
        if (listing?.id && imageFiles.length) {
          const imageForm = new FormData();
          for (const file of imageFiles) imageForm.append('images[]', file);
          imageForm.append('rights_source', String(values.get('rights_source') || ''));
          imageForm.append('rights_license', String(values.get('rights_license') || ''));
          await api(`/seller/listings/${encodeURIComponent(listing.id)}/images`, { method: 'POST', body: imageForm });
        }
        notify(id ? t('updated') : t('created')); loadSeller(); return;
      }
      if (kind === 'images') {
        const imageForm = new FormData();
        for (const file of form.querySelector('input[type="file"]').files) imageForm.append('images[]', file);
        if (!imageForm.has('images[]')) throw new Error(t('requestFailed'));
        imageForm.append('rights_source', String(values.get('rights_source') || ''));
        imageForm.append('rights_license', String(values.get('rights_license') || ''));
        await api(`/seller/listings/${encodeURIComponent(form.dataset.id)}/images`, { method: 'POST', body: imageForm });
        notify(t('imageUploaded')); loadSeller(); return;
      }
      if (kind === 'seller-csv') {
        const result = await api('/seller/listings/import', { method: 'POST', body: new FormData(form) });
        const rowErrors = (result.errors || []).map((item) => `${t('row')} ${item.row}: ${Object.values(item.errors || {}).flat().join('; ')}`).join(' · ');
        showFeedback(`${result.imported || 0} ${t('importedRows')}; ${result.failed || 0} ${t('failedRows')}${rowErrors ? ` · ${rowErrors}` : ''}`, Number(result.failed) > 0);
        await loadSeller(); return;
      }
      if (kind === 'seller-order') {
        await api(`/seller/orders/${encodeURIComponent(form.dataset.order)}/items/${encodeURIComponent(form.dataset.item)}`, { method: 'PATCH', body: Object.fromEntries(values.entries()) });
        loadSeller(); return;
      }
    } catch (error) {
      const message = error.validationErrors ? validationMessage(error)
        : kind === 'auth' ? state.authMode === 'register' ? t('registerError') : t('loginError')
          : safeApiMessage(error);
      showFeedback(message, true);
    } finally {
      if (form.isConnected && submitButton) {
        submitButton.disabled = false;
        form.removeAttribute('aria-busy');
      }
    }
  });
  document.addEventListener('error', (event) => {
    const img = event.target;
    if (!img?.matches?.('.category-review-photo')) return;
    img.hidden = true;
    const fallback = img.parentElement?.querySelector('.category-review-image-fallback');
    if (fallback) fallback.hidden = false;
  }, true);
  document.addEventListener('change', (event) => {
    const theme = event.target.closest('[data-setting="theme"]');
    if (theme) { state.theme = theme.checked ? 'dark' : 'light'; localStorage.setItem('mp-theme', state.theme); render(); }
  });
  render();
  Promise.resolve(state.token ? refreshUser().then(() => refreshCart()).catch((error) => {
    if (error.status === 401) {
      state.token = null;
      state.user = null;
      state.cart = null;
      try { sessionStorage.removeItem('mp-token'); } catch {}
    }
  }) : null)
    .finally(() => { render(); loadCatalog(); });
})();
