import {AdRecord} from "../records/ad.record";
import {pool} from "../utils/db";

let ad: AdRecord;

beforeAll(async () => {
    ad = new AdRecord({
        name: 'Test Name',
        description: 'blah',
        url: 'https://google.com',
        price: 0,
        lat: 9,
        lon: 9,
    });
})

afterAll(async () => {
    await pool.end();
})

test('Can build AdRecord', () => {

   expect(ad.name).toBe('Test Name');
   expect(ad.description).toBe('blah');
});

test('Validates invalid name', () => {
    expect(() => new AdRecord({
        ...ad,
        name: '',
    })).toThrow('Nazwa ogłoszenia nie może być pusta, ani przekraczać 100 znaków')
})

test('Validates invalid description', () => {
    expect(() => new AdRecord({
        ...ad,
        description: 'Należy wspierać harmonijny rozwój działalności gospodarczej w całej Unii oraz ciągły i zrównoważony wzrost poprzez zakończenie tworzenia rynku wewnętrznego, który funkcjonuje właściwie i oferuje warunki podobne do istniejących na rynku krajowym. W celu stworzenia takiego rynku i uczynienia go w większym stopniu rynkiem jednolitym należy znieść nie tylko bariery dla swobodnego przepływu towarów i usług oraz ustanowić przepisy zapewniające, by konkurencja nie była zakłócana, ale dodatkowo należy stworzyć warunki prawne, które pozwolą przedsiębiorstwom na dostosowanie ich działalności produkcyjnej oraz dystrybucyjnej lub świadczenia usług do skali unijnej. W tym celu znaki towarowe pozwalające na odróżnienie towarów i usług przedsiębiorstw w ten sam sposób w całej Unii, bez względu na granice, powinny znaleźć się wśród instrumentów prawnych będących do dyspozycji przedsiębiorstw.\n' +
            '\n' +
            '(4) Dla kontynuowania wymienionych celów Unii wydaje się niezbędne ustanowienie przepisów Unii dla znaków towarowych, na podstawie których przedsiębiorstwa mogą otrzymać w ramach jednolitego postępowania unijne znaki towarowe, którym przyznano jednolitą ochronę i które wywołują jednolite skutki na całym terytorium Unii. Tak wyrażona zasada jednolitego charakteru unijnego znaku towarowego powinna mieć zastosowanie, jeżeli niniejsze rozporządzenie nie stanowi inaczej.\n' +
            '\n' +
            '(5) Bariera terytorialności praw przyznawanych właścicielom znaków towarowych przez ustawodawstwa państw członkowskich nie może być zniesiona przez zbliżenie ustawodawstw. W celu prowadzenia nieograniczonej działalności gospodarczej na terenie całego rynku wewnętrznego z korzyścią dla przedsiębiorstw niezbędna jest możliwość rejestrowania znaków towarowych regulowanych jednolitym prawem Unii stosowanym bezpośrednio we wszystkich państwach członkowskich.\n' +
            '\n' +
            '(6) Doświadczenia zdobyte od czasu ustanowienia systemu wspólnotowego znaku towarowego wykazały, że przedsiębiorstwa z Unii i z państw trzecich przyjęły ten system, który okazał się skutecznym i opłacalnym uzupełnieniem ochrony znaków towarowych na poziomie państw członkowskich i alternatywą dla tej ochrony.\n' +
            '\n' +
            '(7) Jednakże prawo Unii dotyczące znaków towarowych nie zastępuje ustawodawstw państw członkowskich w zakresie znaków towarowych. W istocie nie wydaje się uzasadnione, aby wymagać od przedsiębiorstw składania wniosków o rejestrację swoich znaków towarowych jako unijnych znaków towarowych.\n' +
            '\n' +
            '(8) Krajowe znaki towarowe pozostają nadal niezbędne dla przedsiębiorstw, które nie chcą chronić swoich znaków towarowych na poziomie Unii lub które nie są w stanie uzyskać ogólnounijnej ochrony, podczas gdy nie ma żadnych przeszkód dla objęcia ich ochroną krajową. Do każdej osoby ubiegającej się o ochronę znaku towarowego powinno należeć podjęcie decyzji o skorzystaniu tylko z ochrony krajowej w postaci znaku towarowego w jednym lub większej liczbie państw członkowskich, tylko z ochrony w postaci unijnego znaku towarowego bądź też o skorzystaniu z obydwu tych opcji.\n' +
            '\n' +
            '(9) Prawo do unijnego znaku towarowego powinno być dostępne wyłącznie w drodze rejestracji, a rejestracji tej należy odmawiać w szczególności w sytuacji, gdy znak nie posiada jakichkolwiek znamion odróżniających, gdy jest niezgodny z prawem lub jeśli narusza wcześniejsze prawa.\n' +
            '\n' +
            '(10) Należy dopuścić możliwość przedstawiania oznaczenia w dowolnej stosownej formie, z wykorzystaniem ogólnie dostępnej techniki, a więc niekoniecznie w formie graficznej, o ile dany sposób przedstawienia jest jasny, precyzyjny, samodzielny, łatwo dostępny, zrozumiały, trwały i obiektywny.\n' +
            '\n' +
            '(11) Ochrona udzielana unijnemu znakowi towarowemu, która w szczególności ma mu zapewnić funkcję wskazania pochodzenia, powinna być całkowita w przypadku identyczności między znakiem i oznaczeniem oraz towarami lub usługami. Ochrona powinna mieć zastosowanie również do przypadków podobieństwa między znakiem i oznaczeniem oraz towarami lub usługami. Pojęcie podobieństwa należy interpretować w odniesieniu do prawdopodobieństwa wprowadzenia w błąd. Prawdopodobieństwo wprowadzenia w błąd, którego ocena zależy od wielu czynników, w szczególności rozpoznawalności znaku towarowego na rynku, mogącego powstać skojarzenia ze znakiem używanym lub zarejestrowanym, stopnia podobieństwa między znakiem towarowym i oznaczeniem, między określonymi towarami lub usługami, powinno stanowić szczególny warunek dla takiej ochrony.\n' +
            '\n' +
            '(12) W celu zagwarantowania pewności prawa oraz pełnej zgodności z zasadą pierwszeństwa, zgodnie z którą wcześniej zarejestrowany znak towarowy ma pierwszeństwo przed później zarejestrowanymi znakami towarowymi, należy zapewnić, aby wykonywanie praw wynikających z unijnego znaku towarowego przebiegało bez uszczerbku dla praw właścicieli nabytych przed datą zgłoszenia lub datą pierwszeństwa unijnego znaku towarowego. Takie podejście jest zgodne z art. 16 ust. 1 Porozumienia w sprawie handlowych aspektów praw własności intelektualnej z dnia 15 kwietnia 1994 r.\n' +
            '\n' +
            '(13) W przypadku gdy przedsiębiorstwo używa jednakowego lub podobnego oznaczenia jako nazwy handlowej w taki sposób, który powoduje powstanie powiązania między przedsiębiorstwem noszącym daną nazwę a towarami lub usługami pochodzącymi z tego przedsiębiorstwa, może dojść do wprowadzenia w błąd co do handlowego źródła pochodzenia towarów lub usług. Za naruszenie unijnego znaku towarowego należy zatem uznać również używanie oznaczenia jako nazwy handlowej lub podobnego określenia, o ile użycia takiego dokonano w celu odróżnienia towarów lub usług.\n' +
            '\n' +
            '(14) Aby zagwarantować pewność prawa oraz pełną zgodność ze szczególnymi przepisami prawa Unii, należy przewidzieć, aby właściciel unijnego znaku towarowego był uprawniony do zakazania osobie trzeciej używania oznaczenia w reklamie porównawczej, w przypadku gdy taka reklama porównawcza jest sprzeczna z dyrektywą 2006/114/WE Parlamentu Europejskiego i Rady 7 .\n' +
            '\n' +
            '(15) W celu zapewnienia ochrony wynikającej ze znaku towarowego oraz skutecznego zwalczania procederu podrabiania towarów oraz zgodnie z międzynarodowymi zobowiązaniami Unii w ramach Światowej Organizacji Handlu (WTO), w szczególności na podstawie art. V Układu ogólnego w sprawie taryf celnych i handlu (GATT) dotyczącego swobody tranzytu, oraz - w odniesieniu do leków generycznych - na podstawie "Deklaracji w sprawie porozumienia TRIPS i zdrowia publicznego" przyjętej przez konferencję ministerialną WTO w Ad-Dausze w dniu 14 listopada 2001 r., właściciel unijnego znaku towarowego powinien mieć prawo do uniemożliwienia osobom trzecim wprowadzenia towarów w ramach obrotu handlowego na terytorium Unii bez dopuszczenia ich tam do swobodnego obrotu, w przypadku gdy towary te pochodzą z państw trzecich i opatrzone są - bez zezwolenia - znakiem towarowym, który jest identyczny lub zasadniczo identyczny z unijnym znakiem towarowym zarejestrowanym w odniesieniu do takich towarów.',
    })).toThrow('Treść ogłoszenia nie może przekraczać 1000 znaków.')
})

test('Validates invalid url', () => {
    expect(() => new AdRecord({
        ...ad,
        url: '',
    })).toThrow('Link ogłoszenia nie może być pusty, ani przekraczać 100 znaków')
})

test('Validates invalid price', () => {
    expect(() => new AdRecord({
        ...ad,
        price: -3,
    })).toThrow('Cena nie możę być mniejsza niż 0 lub większa niż 9 999 999.')
})

test('Validates invalid co-ordinates', () => {
    expect(() => new AdRecord({
        ...ad,
        lat: 120,
        lon: 200,
    })).toThrow('Podano niepoprawne koordynaty.')
})

test('Not inserted AdRecord should have no id', async () => {

    expect(ad.id).toBeUndefined();
})

test('Inserted AdRecord should have an id', async () => {

    await ad.insert();

    expect(ad.id).toBeDefined();
    expect(ad.id).toMatch(/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/);
})

test('AdRedcord inserted properly', async () => {

    const newAd = new AdRecord({
        name: 'Mój Test',
        description: 'blahblahblaaaa',
        url: 'https://googlemaps.com',
        price: 10,
        lat: 2,
        lon: 2,
    })

    await newAd.insert();

    expect(newAd).toBeTruthy();

})

