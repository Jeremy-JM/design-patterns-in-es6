// Call
class Client {
    getUrl() {
        let builder = new URLBuilder('jd.com');
        builder.addParameters({ searchKey: encodeURI('DJI mavic air 2s') });
        return builder.build();
    }
}

class URLBuilder {
    constructor(domain) {
        this.url = new URL(domain);
    }

    setProtocol(protocol) {
        this.url.protocol = protocol;
    }

    addParameters(parameters) {
        this.url.parameters = parameters;
    }

    build() {
        let params = [];
        for (const key in this.url.parameters) {
            if (Object.hasOwnProperty.call(this.url.parameters, key)) {
                const element = this.url.parameters[key];
                params.push(`${key}=${element}`);
            }
        }
        let { protocol, domain } = this.url;
        return `${protocol}://${domain}?${params.join('&')}`;
    }
}

class URL {
    constructor(domain) {
        this.protocol = 'https',
            this.domain = domain;
        this.parameters = null;
    }

}