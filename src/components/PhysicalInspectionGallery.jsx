import React, { useState, useEffect } from 'react';
import { ScrollReveal } from './ScrollReveal';
import { ShieldCheck, Ruler, Scale, Sparkles, Box, CheckCircle2, ZoomIn, X, ChevronLeft, ChevronRight, FileText, ArrowRight } from 'lucide-react';

export const PhysicalInspectionGallery = () => {
  // 4 Curated Verification Pillars (All full-resolution original uncropped photos)
  const inspectionStages = [
    {
      id: 'dimension',
      stageNumber: '01',
      title: 'Physical Length Calibration',
      subtitle: 'Dimensional Ruler Verification',
      icon: Ruler,
      description: 'Standardized physical calibration measuring mature pod elongation against export grade thresholds with intact, unbroken pod tips and plump seed chambers.',
      variants: [
        {
          id: 'planifolia-20cm',
          species: 'Vanilla Planifolia (Andrews)',
          grade: 'Gourmet Super Premium',
          metric: '20.5 cm Pod Elongation (0 – 21 cm Calibrated)',
          moisture: '30 – 38%',
          weight: '6 – 9 gr / pod',
          packaging: 'Multi-layer EVOH Vacuum Barrier',
          aspectRatio: '9/16',
          note: 'Full-length ruler calibration verifying elongation exceeding 20.5 cm with intact, plump seed chambers and rich vanillin glaze.',
          image: '/images/inspection_proofs/proof_length_planifolia_20cm.webp'
        },
        {
          id: 'tahitensis-16cm',
          species: 'Vanilla Tahitensis (J.W. Moore)',
          grade: 'Gourmet Premium',
          metric: '16.0 cm Plump Tahitian Pod (0 – 16 cm Calibrated)',
          moisture: '> 30%',
          weight: '4 – 5 gr / pod',
          packaging: 'Multi-layer EVOH Vacuum Barrier',
          aspectRatio: '9/16',
          note: 'Full-length measurement of authentic Tahitensis cured pods exhibiting distinct shorter, plumper morphology and high moisture.',
          image: '/images/inspection_proofs/proof_length_tahitensis_16cm.webp'
        }
      ]
    },
    {
      id: 'weight',
      stageNumber: '02',
      title: 'Grammage & Density Calibration',
      subtitle: 'Laboratory Digital Scale',
      icon: Scale,
      description: 'Precision digital scale grammage checks ensuring optimal moisture density equilibrium and supple bean pliability without hollow weight loss.',
      variants: [
        {
          id: 'weight-planifolia',
          species: 'Vanilla Planifolia Mass',
          grade: 'Super Premium Lot',
          metric: 'Calibrated Single Pod Mass',
          moisture: '30 – 35% Moisture Equilibrium',
          weight: '6.5 – 8.5 gr Average',
          packaging: 'Export Ready',
          aspectRatio: '9/16',
          note: 'Digital scale measurement confirming heavy single pod mass and dense essential oil and seed cavity mass per cured pod.',
          image: '/images/inspection_proofs/proof_weight_planifolia_scale.webp'
        },
        {
          id: 'weight-tahitensis',
          species: 'Vanilla Tahitensis Mass',
          grade: 'Floral Gourmet Lot',
          metric: 'Heavy Plump Gourmet Density',
          moisture: '> 30% Supple Moisture',
          weight: '4.2 – 5.0 gr Average',
          packaging: 'Export Ready',
          aspectRatio: '9/16',
          note: 'Digital scale verification of Tahitensis pods demonstrating high natural essential oil and seed density per bean.',
          image: '/images/inspection_proofs/proof_weight_tahitensis_scale.webp'
        }
      ]
    },
    {
      id: 'bloom',
      stageNumber: '03',
      title: 'Vanillin Frost & Seed Caviar',
      subtitle: 'Active Crystallization & Seed Purity',
      icon: Sparkles,
      description: 'Natural crystalline bloom (givrage) and dense viscous seed caviar serving as indisputable physical proof of high natural vanillin concentration.',
      variants: [
        {
          id: 'bloom-frost',
          species: 'Natural Vanillin Frost (Givrage)',
          grade: 'Crystallized Reserve Grade',
          metric: 'Vanillin > 2.5% Active Frost Bloom',
          moisture: 'Natural Crystalline Bloom',
          weight: 'Pure Vanillin Needles',
          packaging: 'Glass Tube / Vacuum Sealed',
          aspectRatio: '3/4',
          note: 'Full specimen view of authentic white vanillin frost crystals blooming across the outer pod skin — unmistakable proof of supreme vanillin purity.',
          image: '/images/inspection_proofs/proof_vanillin_frost_crystallization.webp'
        },
        {
          id: 'real-caviar',
          species: 'Live Seed Caviar Extraction',
          grade: '100% Pure Seed Mass',
          metric: '30 – 35% Moisture Caviar',
          moisture: 'Viscous Glossy Sheen',
          weight: 'Zero Additives / Pure Seeds',
          packaging: 'Vacuum Plastic 1 KG',
          aspectRatio: '9/16',
          note: 'Direct macro inspection of extracted interior caviar mass, showcasing millions of black aromatic seeds with natural essential oils.',
          image: '/images/inspection_proofs/proof_real_caviar_extraction.webp'
        }
      ]
    },
    {
      id: 'packaging',
      stageNumber: '04',
      title: 'Hermetic Export Packaging',
      subtitle: 'Barrier Protection & Port Ready',
      icon: Box,
      description: 'Multi-layer food-grade EVOH vacuum packaging preventing aroma volatilization and humidity shifts during international air courier and ocean freight.',
      variants: [
        {
          id: 'packaging-vacuum-master',
          species: 'Gourmet Export Vacuum Consignment',
          grade: 'Export Grade Cargo',
          metric: 'Hermetic Vacuum Packs in Insulated Thermal Box',
          moisture: 'Preserved 30–35% Moisture Equilibrium',
          weight: 'Multi-Pouch Export Consolidation',
          packaging: 'Insulated Thermal Styrofoam + Barrier Vacuum Pouches',
          aspectRatio: '9/16',
          note: 'Authentic vacuum-sealed vanilla packages systematically packed inside thermal-insulated export containers ready for direct international air and ocean dispatch.',
          image: '/images/inspection_proofs/proof_export_packaging_vacuum_cargo.webp'
        },
        {
          id: 'packaging-1kg',
          species: '1.00 KG Master Vacuum Pack',
          grade: 'Standard Export Unit',
          metric: 'Hermetic Multi-Layer EVOH Barrier',
          moisture: 'Vacuum Sealed & Raffia Tied',
          weight: '1.00 KG Net Weight',
          packaging: '1 kg, 5 kg, 10 kg Export Cartons',
          aspectRatio: '3/4',
          note: 'Authentic 1.00 KG master vacuum-sealed export pack with raffia-tied bundles, ready for customs clearance and direct port departure.',
          image: '/images/inspection_proofs/proof_export_packaging_1kg_vacuum.webp'
        }
      ]
    }
  ];

  // Flatten all 8 specimens for Lightbox navigation
  const allSpecimens = inspectionStages.flatMap(stage =>
    stage.variants.map(v => ({
      ...v,
      stageNumber: stage.stageNumber,
      stageTitle: stage.title
    }))
  );

  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const [activeVariantIndex, setActiveVariantIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const currentStage = inspectionStages[activeStageIndex];
  const currentVariant = currentStage.variants[activeVariantIndex] || currentStage.variants[0];

  const handleStageChange = (idx) => {
    setActiveStageIndex(idx);
    setActiveVariantIndex(0);
  };

  const openLightboxForCurrent = () => {
    const idx = allSpecimens.findIndex(s => s.id === currentVariant.id);
    setLightboxIndex(idx >= 0 ? idx : 0);
  };

  // Keyboard Navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') setLightboxIndex((prev) => (prev + 1) % allSpecimens.length);
      if (e.key === 'ArrowLeft') setLightboxIndex((prev) => (prev - 1 + allSpecimens.length) % allSpecimens.length);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, allSpecimens.length]);

  return (
    <div
      className="physical-inspection-lab"
      style={{
        marginTop: 'clamp(56px, 8vh, 80px)',
        borderTop: '1px solid var(--border-light)',
        paddingTop: 'clamp(48px, 6vh, 64px)'
      }}
    >
      {/* Header with Clear Visual Hierarchy */}
      <div style={{ maxWidth: '760px', marginBottom: '32px' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
          <ShieldCheck size={16} style={{ color: 'var(--accent-gold)' }} />
          <span className="overline overline-accent" style={{ color: 'var(--accent-gold)' }}>
            QC Laboratory & Physical Evidence Bench
          </span>
        </div>
        <h3
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.8rem, 3vw, 2.4rem)',
            fontWeight: 400,
            color: 'var(--text-primary)',
            lineHeight: 1.2,
            margin: '0 0 12px 0'
          }}
        >
          Physical Quality & Grading Verification
        </h3>
        <p className="body-small" style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem', lineHeight: 1.6, margin: 0 }}>
          Interactive workbench documenting real specimen measurements, digital scale calibrations, vanillin frost blooms, and hermetic export packs.
        </p>
      </div>

      {/* 4-Stage Navigation Strip */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '12px',
          marginBottom: '28px'
        }}
      >
        {inspectionStages.map((stage, idx) => {
          const isActive = idx === activeStageIndex;
          const IconComp = stage.icon;
          return (
            <button
              key={stage.id}
              type="button"
              onClick={() => handleStageChange(idx)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '14px 18px',
                borderRadius: 'var(--radius-xs)',
                border: isActive ? '1.5px solid var(--accent-gold)' : '1px solid var(--border-light)',
                backgroundColor: isActive ? 'var(--bg-primary)' : 'var(--bg-surface)',
                boxShadow: isActive ? 'var(--shadow-subtle)' : 'none',
                cursor: 'pointer',
                textAlign: 'left',
                transition: 'all 0.25s var(--ease-editorial)',
                position: 'relative'
              }}
            >
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  backgroundColor: isActive ? 'var(--accent-gold)' : 'rgba(200, 169, 107, 0.12)',
                  color: isActive ? 'var(--bg-dark)' : 'var(--accent-gold)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  transition: 'all 0.2s ease'
                }}
              >
                <IconComp size={16} />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span className="num-label" style={{ fontSize: '0.625rem', color: 'var(--text-muted)' }}>
                    PHASE {stage.stageNumber}
                  </span>
                  {isActive && <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--accent-gold)' }} />}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '0.9375rem',
                    fontWeight: isActive ? 600 : 400,
                    color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                  }}
                >
                  {stage.title}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Main Inspection Workbench (100% Unobstructed Photo Frame) */}
      <div
        className="double-bezel-outer"
        style={{
          backgroundColor: 'var(--bg-surface)',
          borderRadius: 'var(--radius-sm)'
        }}
      >
        <div
          className="double-bezel-inner"
          style={{
            padding: 'clamp(20px, 3vw, 32px)',
            display: 'flex',
            flexWrap: 'wrap',
            gap: 'clamp(24px, 4vw, 44px)',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {/* Left: 100% Clean Unobstructed Specimen Frame (No overlay texts covering the photo) */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
            <div
              onClick={openLightboxForCurrent}
              title="Click to inspect full resolution"
              style={{
                position: 'relative',
                height: '460px',
                aspectRatio: currentVariant.aspectRatio === '3/4' ? '3/4' : '9/16',
                borderRadius: 'var(--radius-xs)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-cinematic)',
                border: '1px solid var(--border-medium)',
                backgroundColor: '#161310',
                cursor: 'zoom-in',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--accent-gold)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-medium)';
              }}
            >
              {/* Clean, 100% visible photograph without any overlay labels blocking the ruler or pod */}
              <img
                key={currentVariant.image}
                src={currentVariant.image}
                alt={currentVariant.species}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center',
                  display: 'block',
                  animation: 'fadeIn 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
              />
            </div>

            {/* Specimen Details & Click-to-Zoom Button Placed Cleanly Below the Photo */}
            <button
              type="button"
              onClick={openLightboxForCurrent}
              style={{
                marginTop: '10px',
                width: '100%',
                backgroundColor: 'var(--bg-primary)',
                border: '1px solid var(--border-medium)',
                borderRadius: 'var(--radius-pill)',
                padding: '6px 14px',
                fontSize: '0.6875rem',
                fontWeight: 500,
                color: 'var(--text-primary)',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '6px',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--accent-gold)';
                e.currentTarget.style.color = 'var(--bg-dark)';
                e.currentTarget.style.borderColor = 'var(--accent-gold)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--bg-primary)';
                e.currentTarget.style.color = 'var(--text-primary)';
                e.currentTarget.style.borderColor = 'var(--border-medium)';
              }}
            >
              <ZoomIn size={12} />
              <span>Inspect Full Resolution Dossier</span>
            </button>

            <div style={{ marginTop: '6px', width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.625rem', color: 'var(--text-muted)' }}>
              <span>QC-{currentStage.id.toUpperCase()}-{(activeVariantIndex + 1).toString().padStart(2, '0')}</span>
              <span style={{ color: 'var(--accent-gold)' }}>100% Unobstructed Frame</span>
            </div>
          </div>

          {/* Right: Technical Inspector HUD & Origin Switcher */}
          <div style={{ flex: 1, minWidth: 'min(100%, 340px)', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div>
              <span className="overline" style={{ color: 'var(--accent-gold)', fontSize: '0.6875rem', display: 'block', marginBottom: '4px' }}>
                Stage {currentStage.stageNumber} Analysis
              </span>
              <h4
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.4rem, 2.2vw, 1.85rem)',
                  color: 'var(--text-primary)',
                  margin: '0 0 8px 0',
                  lineHeight: 1.25
                }}
              >
                {currentStage.subtitle}
              </h4>
              <p className="body-small" style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.6, margin: 0 }}>
                {currentStage.description}
              </p>
            </div>

            {/* Species / Specimen Switcher Tabs */}
            <div>
              <span style={{ fontSize: '0.6875rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-muted)', display: 'block', marginBottom: '8px' }}>
                Select Specimen Lot:
              </span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {currentStage.variants.map((v, vIdx) => {
                  const isVarActive = vIdx === activeVariantIndex;
                  return (
                    <button
                      key={vIdx}
                      type="button"
                      onClick={() => setActiveVariantIndex(vIdx)}
                      style={{
                        padding: '8px 14px',
                        borderRadius: 'var(--radius-pill)',
                        border: isVarActive ? '1.5px solid var(--accent-gold)' : '1px solid var(--border-medium)',
                        backgroundColor: isVarActive ? 'var(--accent-gold)' : '#FFFFFF',
                        color: isVarActive ? 'var(--bg-dark)' : 'var(--text-primary)',
                        fontWeight: isVarActive ? 600 : 400,
                        fontSize: '0.75rem',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px'
                      }}
                    >
                      <CheckCircle2 size={12} style={{ opacity: isVarActive ? 1 : 0.4 }} />
                      <span>{v.species}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Specimen Metrics Table */}
            <div
              style={{
                backgroundColor: 'var(--bg-primary)',
                border: '1px solid var(--border-light)',
                borderRadius: 'var(--radius-xs)',
                overflow: 'hidden'
              }}
            >
              <div style={{ padding: '10px 14px', borderBottom: '1px solid var(--border-light)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Quality Grade</span>
                <strong style={{ fontSize: '0.8125rem', color: 'var(--accent-gold)' }}>{currentVariant.grade}</strong>
              </div>
              <div style={{ padding: '10px 14px', borderBottom: '1px solid var(--border-light)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Measured Calibration</span>
                <strong style={{ fontSize: '0.875rem', color: 'var(--text-primary)' }}>{currentVariant.metric}</strong>
              </div>
              <div style={{ padding: '10px 14px', borderBottom: '1px solid var(--border-light)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Moisture Content</span>
                <strong style={{ fontSize: '0.8125rem', color: 'var(--text-primary)' }}>{currentVariant.moisture}</strong>
              </div>
              <div style={{ padding: '10px 14px', borderBottom: '1px solid var(--border-light)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Weight / Pod Mass</span>
                <strong style={{ fontSize: '0.8125rem', color: 'var(--text-primary)' }}>{currentVariant.weight}</strong>
              </div>
              <div style={{ padding: '10px 14px', backgroundColor: 'rgba(200, 169, 107, 0.05)' }}>
                <p className="body-small" style={{ margin: 0, fontSize: '0.75rem', color: 'var(--text-secondary)', fontStyle: 'italic', lineHeight: 1.5 }}>
                  "{currentVariant.note}"
                </p>
              </div>
            </div>

            {/* Bottom Quick Action */}
            <button
              type="button"
              onClick={openLightboxForCurrent}
              className="btn btn-secondary"
              style={{
                width: '100%',
                padding: '9px 16px',
                fontSize: '0.75rem',
                justifyContent: 'center'
              }}
            >
              <ZoomIn size={14} />
              <span>Inspect Full Resolution Dossier</span>
            </button>
          </div>
        </div>
      </div>

      {/* Ultra-Luxury High-Res Split-Screen Inspection Dossier Modal (Zero Black Bars & Zero Overlays on Photo) */}
      {lightboxIndex !== null && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 'var(--z-modal-backdrop)',
            backgroundColor: 'rgba(10, 8, 7, 0.88)',
            backdropFilter: 'blur(14px)',
            WebkitBackdropFilter: 'blur(14px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 'clamp(16px, 3vw, 36px)',
            animation: 'fadeIn 0.2s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
          onClick={() => setLightboxIndex(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="dossier-modal-title"
        >
          <div
            style={{
              position: 'relative',
              maxWidth: '880px',
              width: '100%',
              backgroundColor: 'var(--bg-surface)',
              borderRadius: 'var(--radius-sm)',
              boxShadow: 'var(--shadow-cinematic)',
              border: '1px solid var(--border-medium)',
              padding: 'clamp(20px, 3vw, 32px)',
              display: 'flex',
              flexWrap: 'wrap',
              gap: 'clamp(20px, 3vw, 32px)',
              alignItems: 'center',
              justifyContent: 'center',
              maxHeight: '92vh',
              overflowY: 'auto'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setLightboxIndex(null)}
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                zIndex: 30,
                backgroundColor: 'var(--bg-primary)',
                color: 'var(--text-secondary)',
                border: '1px solid var(--border-medium)',
                borderRadius: '50%',
                width: '34px',
                height: '34px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--text-primary)';
                e.currentTarget.style.borderColor = 'var(--accent-gold)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--text-secondary)';
                e.currentTarget.style.borderColor = 'var(--border-medium)';
              }}
              aria-label="Close Inspection Dossier"
            >
              <X size={16} />
            </button>

            {/* Left: Perfectly Framed Portrait Specimen with Edge Chevrons */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', flexShrink: 0 }}>
              <div
                style={{
                  position: 'relative',
                  height: '480px',
                  aspectRatio: allSpecimens[lightboxIndex].aspectRatio === '3/4' ? '3/4' : '9/16',
                  borderRadius: 'var(--radius-xs)',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-cinematic)',
                  border: '1px solid var(--border-medium)',
                  backgroundColor: '#161310'
                }}
              >
                <img
                  src={allSpecimens[lightboxIndex].image}
                  alt={allSpecimens[lightboxIndex].species}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                    display: 'block'
                  }}
                />

                {/* Left & Right Chevrons */}
                <button
                  type="button"
                  onClick={() => setLightboxIndex((prev) => (prev - 1 + allSpecimens.length) % allSpecimens.length)}
                  style={{
                    position: 'absolute',
                    left: '8px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(23, 21, 18, 0.85)',
                    backdropFilter: 'blur(6px)',
                    border: '1px solid rgba(255, 255, 255, 0.25)',
                    color: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    zIndex: 20
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--accent-gold)', e.currentTarget.style.color = 'var(--bg-dark)')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(23, 21, 18, 0.85)', e.currentTarget.style.color = '#FFFFFF')}
                  aria-label="Previous Specimen"
                >
                  <ChevronLeft size={16} />
                </button>

                <button
                  type="button"
                  onClick={() => setLightboxIndex((prev) => (prev + 1) % allSpecimens.length)}
                  style={{
                    position: 'absolute',
                    right: '8px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(23, 21, 18, 0.85)',
                    backdropFilter: 'blur(6px)',
                    border: '1px solid rgba(255, 255, 255, 0.25)',
                    color: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    zIndex: 20
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--accent-gold)', e.currentTarget.style.color = 'var(--bg-dark)')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(23, 21, 18, 0.85)', e.currentTarget.style.color = '#FFFFFF')}
                  aria-label="Next Specimen"
                >
                  <ChevronRight size={16} />
                </button>
              </div>

              {/* Specimen Index Pill */}
              <div
                style={{
                  marginTop: '8px',
                  backgroundColor: 'var(--bg-primary)',
                  border: '1px solid var(--border-light)',
                  padding: '3px 10px',
                  borderRadius: 'var(--radius-pill)',
                  color: 'var(--accent-gold)',
                  fontSize: '0.625rem',
                  fontWeight: 600,
                  letterSpacing: '0.08em'
                }}
              >
                SPECIMEN {lightboxIndex + 1} OF {allSpecimens.length}
              </div>
            </div>

            {/* Right: Clean High-Contrast QC Dossier Certificate */}
            <div
              style={{
                flex: 1,
                minWidth: 'min(100%, 360px)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '16px'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '6px' }}>
                  <ShieldCheck size={14} style={{ color: 'var(--accent-gold)' }} />
                  <span className="overline overline-accent" style={{ color: 'var(--accent-gold)', fontSize: '0.6875rem' }}>
                    QC Verification Certificate · Phase {allSpecimens[lightboxIndex].stageNumber}
                  </span>
                </div>

                <h3
                  id="dossier-modal-title"
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(1.3rem, 2vw, 1.65rem)',
                    color: 'var(--text-primary)',
                    margin: '0 0 6px 0',
                    lineHeight: 1.2
                  }}
                >
                  {allSpecimens[lightboxIndex].species}
                </h3>

                <div style={{ display: 'inline-block', backgroundColor: 'var(--bg-primary)', border: '1px solid var(--accent-gold)', padding: '3px 10px', borderRadius: 'var(--radius-pill)', fontSize: '0.6875rem', fontWeight: 600, color: 'var(--accent-gold)', marginBottom: '14px' }}>
                  {allSpecimens[lightboxIndex].grade}
                </div>

                {/* Technical Calibration Parameters Table */}
                <div
                  style={{
                    backgroundColor: 'var(--bg-primary)',
                    border: '1px solid var(--border-light)',
                    borderRadius: 'var(--radius-xs)',
                    overflow: 'hidden',
                    marginBottom: '14px'
                  }}
                >
                  <div style={{ padding: '8px 12px', borderBottom: '1px solid var(--border-light)', display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem' }}>
                    <span style={{ color: 'var(--text-muted)' }}>Measured Calibration:</span>
                    <strong style={{ color: 'var(--accent-gold)' }}>{allSpecimens[lightboxIndex].metric}</strong>
                  </div>
                  <div style={{ padding: '8px 12px', borderBottom: '1px solid var(--border-light)', display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem' }}>
                    <span style={{ color: 'var(--text-muted)' }}>Moisture Equilibrium:</span>
                    <strong style={{ color: 'var(--text-primary)' }}>{allSpecimens[lightboxIndex].moisture}</strong>
                  </div>
                  <div style={{ padding: '8px 12px', borderBottom: '1px solid var(--border-light)', display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem' }}>
                    <span style={{ color: 'var(--text-muted)' }}>Single Pod Mass / Density:</span>
                    <strong style={{ color: 'var(--text-primary)' }}>{allSpecimens[lightboxIndex].weight}</strong>
                  </div>
                  <div style={{ padding: '8px 12px', display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem' }}>
                    <span style={{ color: 'var(--text-muted)' }}>Export Packaging:</span>
                    <strong style={{ color: 'var(--text-primary)' }}>{allSpecimens[lightboxIndex].packaging}</strong>
                  </div>
                </div>

                {/* Official Inspector Statement */}
                <p
                  className="body-small"
                  style={{
                    color: 'var(--text-secondary)',
                    fontSize: '0.78125rem',
                    lineHeight: 1.5,
                    margin: '0 0 14px 0',
                    borderLeft: '2px solid var(--accent-gold)',
                    paddingLeft: '10px',
                    fontStyle: 'italic'
                  }}
                >
                  "{allSpecimens[lightboxIndex].note}"
                </p>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', borderTop: '1px solid var(--border-light)', paddingTop: '14px' }}>
                <button
                  type="button"
                  onClick={() => {
                    setLightboxIndex(null);
                    window.location.hash = '#inquiry';
                  }}
                  className="btn btn-primary"
                  style={{ width: '100%', padding: '9px 16px', fontSize: '0.75rem', justifyContent: 'center' }}
                >
                  <span>Request Sample Allocation</span>
                </button>
                <span style={{ fontSize: '0.625rem', color: 'var(--text-muted)', textAlign: 'center', display: 'block' }}>
                  Use keyboard ← / → arrows to inspect all 8 verification specimens
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PhysicalInspectionGallery;
