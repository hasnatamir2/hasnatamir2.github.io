import { type SchemaTypeDefinition } from 'sanity'

import {contentType} from './contentType'
import {siteSettingsType} from './siteSettingsType'
import {experienceType} from './experienceType'
import {projectType} from './projectType'
import {skillType} from './skillType'
import {openSourceContributionType} from './openSourceContributionType'
import {achievementType} from './achievementType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    contentType,
    siteSettingsType,
    experienceType,
    projectType,
    skillType,
    openSourceContributionType,
    achievementType,
  ],
}
