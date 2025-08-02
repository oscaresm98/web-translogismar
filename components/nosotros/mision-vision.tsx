'use client'
import useIntersection from "@/hooks/useIntersection";
import EnterpriseInterface from "@/interfaces/enterpriseInterface";
import { faArrowsToDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type MisionVisionProps = {
    enterprise: EnterpriseInterface
}

function MisionVision({enterprise}: MisionVisionProps) {

    const [misionRef, readyMV] = useIntersection({ threshold: 0.3 })

    return (
        <section className="section-padding bg-gradient-to-b from-neutral-50 to-white relative overflow-hidden">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-dark-800 mb-4">
                        Nuestra <span className="text-gradient">Filosofía</span>
                    </h2>
                    <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                        Los valores que nos impulsan a ser líderes en el sector logístico
                    </p>
                </div>
                
                <div ref={misionRef} className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
                    {/* Misión Card */}
                    <div className={`group card card-hover p-8 text-center space-y-6 bg-gradient-to-br from-white to-accent-50 border-t-4 border-accent-500 transition-all duration-700 ${readyMV ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                        <div className="relative">
                            <div className="w-20 h-20 bg-gradient-to-br from-accent-500 to-accent-600 rounded-full flex items-center justify-center mx-auto shadow-medium group-hover:shadow-glow transition-all duration-300">
                                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <div className="absolute -top-2 -right-2 w-6 h-6 bg-accent-400 rounded-full animate-pulse"></div>
                        </div>
                        
                        <div className="space-y-4">
                            <h3 className="text-2xl md:text-3xl font-bold text-dark-800">
                                Nuestra Misión
                            </h3>
                            <div className="w-16 h-1 bg-accent-500 rounded-full mx-auto"></div>
                            <p className="text-neutral-700 leading-relaxed text-lg">
                                {enterprise.descMision}
                            </p>
                        </div>
                        
                        <div className="flex justify-center space-x-2 pt-4">
                            <div className="w-2 h-2 bg-accent-500 rounded-full animate-bounce" style={{animationDelay: '0s'}}></div>
                            <div className="w-2 h-2 bg-accent-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                            <div className="w-2 h-2 bg-accent-300 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                        </div>
                    </div>
                    
                    {/* Visión Card */}
                    <div className={`group card card-hover p-8 text-center space-y-6 bg-gradient-to-br from-white to-dark-50 border-t-4 border-dark-600 transition-all duration-700 delay-200 ${readyMV ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                        <div className="relative">
                            <div className="w-20 h-20 bg-gradient-to-br from-dark-600 to-dark-700 rounded-full flex items-center justify-center mx-auto shadow-medium group-hover:shadow-strong transition-all duration-300">
                                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                            </div>
                            <div className="absolute -top-2 -right-2 w-6 h-6 bg-dark-400 rounded-full animate-pulse"></div>
                        </div>
                        
                        <div className="space-y-4">
                            <h3 className="text-2xl md:text-3xl font-bold text-dark-800">
                                Nuestra Visión
                            </h3>
                            <div className="w-16 h-1 bg-dark-600 rounded-full mx-auto"></div>
                            <p className="text-neutral-700 leading-relaxed text-lg">
                                {enterprise.descVision}
                            </p>
                        </div>
                        
                        <div className="flex justify-center space-x-2 pt-4">
                            <div className="w-2 h-2 bg-dark-600 rounded-full animate-bounce" style={{animationDelay: '0s'}}></div>
                            <div className="w-2 h-2 bg-dark-500 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                            <div className="w-2 h-2 bg-dark-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                        </div>
                    </div>
                </div>
                
                {/* Valores Section */}
                <div className="mt-16 text-center">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        <div className="space-y-3">
                            <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center mx-auto">
                                <svg className="w-6 h-6 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h4 className="font-bold text-dark-800">Confiabilidad</h4>
                            <p className="text-sm text-neutral-600">Cumplimos nuestras promesas</p>
                        </div>
                        
                        <div className="space-y-3">
                            <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center mx-auto">
                                <svg className="w-6 h-6 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h4 className="font-bold text-dark-800">Eficiencia</h4>
                            <p className="text-sm text-neutral-600">Optimizamos cada proceso</p>
                        </div>
                        
                        <div className="space-y-3">
                            <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center mx-auto">
                                <svg className="w-6 h-6 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                            </div>
                            <h4 className="font-bold text-dark-800">Compromiso</h4>
                            <p className="text-sm text-neutral-600">Dedicación total al cliente</p>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Background Decorations */}
            <div className="absolute top-20 right-10 w-32 h-32 bg-accent-200/30 rounded-full blur-2xl"></div>
            <div className="absolute bottom-20 left-10 w-24 h-24 bg-dark-300/20 rounded-full blur-xl"></div>
        </section>
    )
}

export default MisionVision