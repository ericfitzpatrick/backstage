/*
 * Copyright 2022 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from 'react';

import { ApiListItem } from '../components/api-list-item';
import { AnyList } from '../components/any-list';
import { useDevToolsApis } from '../hooks-internal/apis';
import { useBackstageApp } from '../hooks-internal/backstage-app';

export function ApisPage() {
  const app = useBackstageApp();

  const apis = useDevToolsApis(app);

  return (
    <AnyList subtitle="Registered apis">
      {apis.map(api => (
        <ApiListItem key={api.id} api={api} />
      ))}
    </AnyList>
  );
}