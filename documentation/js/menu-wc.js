'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`<nav>
    <ul class="list">
        <li class="title">
            <a href="index.html" data-type="index-link">adminpro documentation</a>
        </li>
        <li class="divider"></li>
        ${ isNormalMode ? `<div id="book-search-input" role="search">
    <input type="text" placeholder="Type to search">
</div>
` : '' }
        <li class="chapter">
            <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
            <ul class="links">
                    <li class="link">
                        <a href="overview.html" data-type="chapter-link">
                            <span class="icon ion-ios-keypad"></span>Overview
                        </a>
                    </li>
                    <li class="link">
                        <a href="index.html" data-type="chapter-link">
                            <span class="icon ion-ios-paper"></span>README
                        </a>
                    </li>
                    <li class="link">
                        <a href="dependencies.html"
                            data-type="chapter-link">
                            <span class="icon ion-ios-list"></span>Dependencies
                        </a>
                    </li>
            </ul>
        </li>
        <li class="chapter modules">
            <a data-type="chapter-link" href="modules.html">
                <div class="menu-toggler linked" data-toggle="collapse"
                    ${ isNormalMode ? 'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                    <span class="icon ion-ios-archive"></span>
                    <span class="link-name">Modules</span>
                    <span class="icon ion-ios-arrow-down"></span>
                </div>
            </a>
            <ul class="links collapse"
            ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                    <li class="link">
                        <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-AppModule-89f04a47ca52c5ffb24ac9b952621d49"' : 'data-target="#xs-components-links-module-AppModule-89f04a47ca52c5ffb24ac9b952621d49"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-AppModule-89f04a47ca52c5ffb24ac9b952621d49"' : 'id="xs-components-links-module-AppModule-89f04a47ca52c5ffb24ac9b952621d49"' }>
                                        <li class="link">
                                            <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoginComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/RegisterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">RegisterComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/PagesModule.html" data-type="entity-link">PagesModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-PagesModule-be4b101976bdc8acc4dc29041ec83e73"' : 'data-target="#xs-components-links-module-PagesModule-be4b101976bdc8acc4dc29041ec83e73"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-PagesModule-be4b101976bdc8acc4dc29041ec83e73"' : 'id="xs-components-links-module-PagesModule-be4b101976bdc8acc4dc29041ec83e73"' }>
                                        <li class="link">
                                            <a href="components/DashboardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">DashboardComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/Graficas1Component.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">Graficas1Component</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/PagesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">PagesComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/ProgressComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProgressComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
                    <li class="link">
                        <a href="modules/SharedModule.html" data-type="entity-link">SharedModule</a>
                            <li class="chapter inner">
                                <div class="simple menu-toggler" data-toggle="collapse"
                                    ${ isNormalMode ? 'data-target="#components-links-module-SharedModule-324d367515ac095d93d5d3d5fefdfa46"' : 'data-target="#xs-components-links-module-SharedModule-324d367515ac095d93d5d3d5fefdfa46"' }>
                                    <span class="icon ion-md-cog"></span>
                                    <span>Components</span>
                                    <span class="icon ion-ios-arrow-down"></span>
                                </div>
                                <ul class="links collapse"
                                    ${ isNormalMode ? 'id="components-links-module-SharedModule-324d367515ac095d93d5d3d5fefdfa46"' : 'id="xs-components-links-module-SharedModule-324d367515ac095d93d5d3d5fefdfa46"' }>
                                        <li class="link">
                                            <a href="components/BreadcrumbsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">BreadcrumbsComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/HeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">HeaderComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/NopagefoundComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">NopagefoundComponent</a>
                                        </li>
                                        <li class="link">
                                            <a href="components/SidebarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules">SidebarComponent</a>
                                        </li>
                                </ul>
                            </li>
                    </li>
            </ul>
        </li>
                <li class="chapter">
                    <div class="simple menu-toggler" data-toggle="collapse"
                        ${ isNormalMode ? 'data-target="#injectables-links"' : 'data-target="#xs-injectables-links"' }>
                        <span class="icon ion-md-arrow-round-down"></span>
                        <span>Injectables</span>
                        <span class="icon ion-ios-arrow-down"></span>
                    </div>
                    <ul class="links collapse"
                    ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                            <li class="link">
                                <a href="injectables/SharedService.html" data-type="entity-link">SharedService</a>
                            </li>
                            <li class="link">
                                <a href="injectables/SidebarService.html" data-type="entity-link">SidebarService</a>
                            </li>
                    </ul>
                </li>
        <li class="chapter">
            <div class="simple menu-toggler" data-toggle="collapse"
            ${ isNormalMode ? 'data-target="#miscellaneous-links"' : 'data-target="#xs-miscellaneous-links"' }>
                <span class="icon ion-ios-cube"></span>
                <span>Miscellaneous</span>
                <span class="icon ion-ios-arrow-down"></span>
            </div>
            <ul class="links collapse"
            ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                    <li class="link">
                      <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                    </li>
            </ul>
        </li>
        <li class="chapter">
            <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
        </li>
        <li class="divider"></li>
        <li class="copyright">
                Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.svg" class="img-responsive" data-type="compodoc-logo">
                </a>
        </li>
    </ul>
</nav>`);
        this.innerHTML = tp.strings;
    }
});
