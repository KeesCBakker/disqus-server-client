import { DisqusCore } from "disqus-server-client-core"
import { AetEndpoint } from "./endpoints/AetEndpoint"
import { ApothecaryEndpoint } from "./endpoints/ApothecaryEndpoint"
import { ApplicationsEndpoint } from "./endpoints/ApplicationsEndpoint"
import { BlacklistsEndpoint } from "./endpoints/BlacklistsEndpoint"
import { CategoriesEndpoint } from "./endpoints/CategoriesEndpoint"
import { ExportsEndpoint } from "./endpoints/ExportsEndpoint"
import { ForumCategoriesEndpoint } from "./endpoints/ForumCategoriesEndpoint"
import { ForumsEndpoint } from "./endpoints/ForumsEndpoint"
import { ForumsBehindClickEndpoint } from "./endpoints/ForumsBehindClickEndpoint"
import { ForumsBlockEndpoint } from "./endpoints/ForumsBlockEndpoint"
import { ImportsEndpoint } from "./endpoints/ImportsEndpoint"
import { InternalForumsActionHistoryEndpoint } from "./endpoints/InternalForumsActionHistoryEndpoint"
import { OrganizationsEndpoint } from "./endpoints/OrganizationsEndpoint"
import { OrganizationsSaasEndpoint } from "./endpoints/OrganizationsSaasEndpoint"
import { PagesEndpoint } from "./endpoints/PagesEndpoint"
import { PostsEndpoint } from "./endpoints/PostsEndpoint"
import { SaasPackagesEndpoint } from "./endpoints/SaasPackagesEndpoint"
import { ThreadsEndpoint } from "./endpoints/ThreadsEndpoint"
import { TopicsEndpoint } from "./endpoints/TopicsEndpoint"
import { TrendsEndpoint } from "./endpoints/TrendsEndpoint"
import { ForumsTrustedDomainEndpoint } from "./endpoints/ForumsTrustedDomainEndpoint"
import { UsersEndpoint } from "./endpoints/UsersEndpoint"
import { WhitelistsEndpoint } from "./endpoints/WhitelistsEndpoint"

export class Disqus extends DisqusCore {
    aet = new AetEndpoint(this)
    apothecary = new ApothecaryEndpoint(this)
    applications = new ApplicationsEndpoint(this)
    blacklists = new BlacklistsEndpoint(this)
    categories = new CategoriesEndpoint(this)
    exports = new ExportsEndpoint(this)
    forumCategories = new ForumCategoriesEndpoint(this)
    forums = new ForumsEndpoint(this)
    forumsBehindClick = new ForumsBehindClickEndpoint(this)
    forumsBlock = new ForumsBlockEndpoint(this)
    imports = new ImportsEndpoint(this)
    internalForumsActionHistory = new InternalForumsActionHistoryEndpoint(this)
    organizations = new OrganizationsEndpoint(this)
    organizationsSaas = new OrganizationsSaasEndpoint(this)
    pages = new PagesEndpoint(this)
    posts = new PostsEndpoint(this)
    saasPackages = new SaasPackagesEndpoint(this)
    threads = new ThreadsEndpoint(this)
    topics = new TopicsEndpoint(this)
    trends = new TrendsEndpoint(this)
    forumsTrustedDomain = new ForumsTrustedDomainEndpoint(this)
    users = new UsersEndpoint(this)
    whitelists = new WhitelistsEndpoint(this)
}
