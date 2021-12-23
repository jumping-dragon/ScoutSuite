from ScoutSuite.providers.aws.resources.base import AWSResources


class Servercertificates(AWSResources):
    async def fetch_all(self):
        raw_server_certificates = await self.facade.iam.get_server_certificates()
        for raw_server_certificate in raw_server_certificates:
            name, resource = self._parse_server_certificate(raw_server_certificate)
              
            if name in self:
                continue

            self[name] = resource

    def _parse_server_certificate(self, raw_server_certificate):
        raw_server_certificate['id'] = raw_server_certificate.pop('ServerCertificateId')
        raw_server_certificate['name'] = raw_server_certificate.pop('ServerCertificateName')
        raw_server_certificate['arn'] = raw_server_certificate.pop('Arn')
        raw_server_certificate['expiration'] = raw_server_certificate.pop('Expiration')
        # if (len(raw_server_certificate['tags']['Tags']) > 0):
        #     raw_server_certificate['Tags'] = raw_server_certificate['tags']['Tags']
        return raw_server_certificate['id'], raw_server_certificate
