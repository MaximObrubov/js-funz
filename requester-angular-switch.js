// NOTE: yeah yeah I'm lazy to write it again and want just copypaste
  private request(verb: HTTP_VERBS, path: string, data?: string, headers?: HttpHeaders) {
    headers.set('Access-Control-Allow-Origin', this.messageService.origin);
    const url = new URL(this.messageService.origin);
    url.pathname = path;

    const flyover = {
      [HTTP_VERBS.POST]: () => {
        return this.http.post(url.toString(), data, { headers });
      }
    }

    return flyover[verb]();
  }
