import { useTranslation } from "react-i18next";
import imageAssessor from "../assets/courses/assessor.png";
import imageIQA from "../assets/courses/IQA.png";
import imageTrainer from "../assets/courses/trainer.png";
import imageBarbering from "../assets/courses/BARBERING.png";
import imageHairdressing from "../assets/courses/HAIRDRESSING.png";
import imageFacial from "../assets/courses/FACIAL.png";
import imageMassage from "../assets/courses/MASSAGE.png";
import imageEyelash from "../assets/courses/EYELASH.png";
import imageNail from "../assets/courses/NAIL.png";
import imageAESTHETIC from "../assets/courses/AESTHETIC.png";
import imageConstructionSafety from "../assets/courses/CONSTRUCTION_SAFETY.png";
import imageWarning from "../assets/courses/Warning.png";
import imageGoodsVehicles from "../assets/courses/GoodsVehicles.png";
import imagePainting from "../assets/courses/Painting.png";
import imageFittingandInteriors from "../assets/courses/FittingandInteriors.png";
import imagePlastering from "../assets/courses/Plastering.png";
import imageBuilder from "../assets/courses/Builder.png";
import imageCivilEngineering from "../assets/courses/CivilEngineering.png";
import imageCladding from "../assets/courses/CLADDING.png";
import imageTiling from "../assets/courses/TILING.png";
import imageConstruction from "../assets/courses/CONSTRUCTION.png";
import imageGround from "../assets/courses/GroundWork.png";
import imageLaw from "../assets/courses/Law.png";
import imageIT from "../assets/courses/IT.png";


export enum CategoryI {
  Education = "Education",
  Beauty = "Beauty",
  Construction = "Construction",
  Law = "Law",
  IT = "IT",
}

interface CoursesI {
  heading: string,
  completeDescription: string,
  courseKey: string
}

export interface groupCoursesI {
  group: string,
  groupKey: string,
  category: CategoryI,
  description: string,
  courses: CoursesI[],
  image: string
}


export function useCourses () {
    const { t } = useTranslation()
    const groupedCourses: groupCoursesI[] = [
      {
        "group": "Assessor Courses",
        "groupKey": "assessor_courses",
        "category": CategoryI.Education,
        "description": t('coursesGroup.assessor_courses.description'),
        "courses": [
          {
            "heading": "Level 3 Certificate in Assessing Vocational Achievement",
            "courseKey": "level_3_certificate_in_assessing_vocational_achievement",
            "completeDescription": t('coursesDescriptions.level_3_certificate_in_assessing_vocational_achievement')
          }
        ],
        "image": imageAssessor
      },
      {
        "group": "IQA Courses",
        "groupKey": "iqa_courses",
        "category": CategoryI.Education,
        "description": t('coursesGroup.iqa_courses.description'),
        "courses": [
          {
            "heading": "Level 4 Award in the IQA of Assessment Processes and Practices",
            "courseKey": "level_4_award_in_the_iqa_of_assessment_processes_and_practices",
            "completeDescription": t('coursesDescriptions.level_4_award_in_the_iqa_of_assessment_processes_and_practices')
          }
        ],
        "image": imageIQA
      },
      {
        "group": "Trainer Courses",
        "groupKey": "trainer_courses",
        "category": CategoryI.Education,
        "description": t('coursesGroup.trainer_courses.description'),
        "courses": [
          {
            "heading": "Level 3 Award in Education and Training",
            "courseKey": "level_3_award_in_education_and_training",
            "completeDescription": t('coursesDescriptions.level_3_award_in_education_and_training')
          },
          {
            "heading": "Level 3 Certificate in Teaching and Training",
            "courseKey": "level_3_certificate_in_teaching_and_training",
            "completeDescription": t('coursesDescriptions.level_3_certificate_in_teaching_and_training')
          },
          {
            "heading": "Level 5 Diploma in Teaching - Further Education and Skills",
            "courseKey": "level_5_diploma_in_teaching__further_education_and_skills",
            "completeDescription": t('coursesDescriptions.level_5_diploma_in_teaching__further_education_and_skills')
          }
        ],
        "image": imageTrainer
      },
      {
        "group": "Beauty Therapy Courses",
        "groupKey": "beauty_therapy_courses",
        "category": CategoryI.Beauty,
        "description": t('coursesGroup.beauty_therapy_courses.description'),
        "courses": [
          {
            "heading": "Level 2 Diploma for Beauty Therapists",
            "courseKey": "level_2_diploma_for_beauty_therapists",
            "completeDescription": t('coursesDescriptions.level_2_diploma_for_beauty_therapists')
          },
          {
            "heading": "Level 2 Award in Facial Skincare Treatments",
            "courseKey": "level_2_award_in_facial_skincare_treatments",
            "completeDescription": t('coursesDescriptions.level_2_award_in_facial_skincare_treatments')
          },
          {
            "heading": "Level 3 Diploma in Beauty Therapy Treatments",
            "courseKey": "level_3_diploma_in_beauty_therapy_treatments",
            "completeDescription": t('coursesDescriptions.level_3_diploma_in_beauty_therapy_treatments')
          },
          {
            "heading": "Level 2 Award in Makeup",
            "courseKey": "level_2_award_in_makeup",
            "completeDescription": t('coursesDescriptions.level_2_award_in_makeup')
          },
          {
            "heading": "Level 2 Certificate in Waxing the Face and Body",
            "courseKey": "level_2_certificate_in_waxing_the_face_and_body",
            "completeDescription": t('coursesDescriptions.level_2_certificate_in_waxing_the_face_and_body')
          }
        ],
        "image": imageFacial
      },
      {
        "group": "Massage Courses",
        "groupKey": "massage_courses",
        "category": CategoryI.Beauty,
        "description": t('coursesGroup.massage_courses.description'),
        "courses": [
          {
            "heading": "Level 2 Award in Body Massage Treatments",
            "courseKey": "level_2_award_in_body_massage_treatments",
            "completeDescription": t('coursesDescriptions.level_2_award_in_body_massage_treatments')
          },
          {
            "heading": "Level 2 Certificate in Body Massage Treatment",
            "courseKey": "level_2_certificate_in_body_massage_treatment",
            "completeDescription": t('coursesDescriptions.level_2_certificate_in_body_massage_treatment')
          }
        ],
        "image": imageMassage
      },
      {
        "group": "Nail Courses",
        "groupKey": "nail_courses",
        "category": CategoryI.Beauty,
        "description": t('coursesGroup.nail_courses.description'),
        "courses": [
          {
            "heading": "Level 2 Certificate in Nail Enhancement Services",
            "courseKey": "level_2_certificate_in_nail_enhancement_services",
            "completeDescription": t('coursesDescriptions.level_2_certificate_in_nail_enhancement_services')
          },
          {
            "heading": "Level 2 Certificate in Nail Services",
            "courseKey": "level_2_certificate_in_nail_services",
            "completeDescription": t('coursesDescriptions.level_2_certificate_in_nail_services')
          }
        ],
        "image": imageNail
      },
      {
        "group": "Eyelash Courses",
        "groupKey": "eyelash_courses",
        "category": CategoryI.Beauty,
        "description": t('coursesGroup.eyelash_courses.description'),
        "courses": [
          {
            "heading": "Level 3 Award in Eyelash Extension Application",
            "courseKey": "level_3_award_in_eyelash_extension_application",
            "completeDescription": t('coursesDescriptions.level_3_award_in_eyelash_extension_application')
          },
          {
            "heading": "Level 2 Award in Eyelash and Eyebrow Treatments",
            "courseKey": "level_2_award_in_eyelash_and_eyebrow_treatments",
            "completeDescription": t('coursesDescriptions.level_2_award_in_eyelash_and_eyebrow_treatments')
          }
        ],
        "image": imageEyelash
      },
      {
        "group": "Hairdressing Courses",
        "groupKey": "hairdressing_courses",
        "category": CategoryI.Beauty,
        "description": t('coursesGroup.hairdressing_courses.description'),
        "courses": [
          {
            "heading": "Level 2 Certificate in Women\u2019s Hairdressing",
            "courseKey": "level_2_certificate_in_womens_hairdressing",
            "completeDescription": t('coursesDescriptions.level_2_certificate_in_womens_hairdressing')
          },
          {
            "heading": "Level 3 Certificate in Chemical Hair Straightening",
            "courseKey": "level_3_certificate_in_chemical_hair_straightening",
            "completeDescription": t('coursesDescriptions.level_3_certificate_in_chemical_hair_straightening')
          },
          {
            "heading": "Level 3 Certificate in Hair Extension Services",
            "courseKey": "level_3_certificate_in_hair_extension_services",
            "completeDescription": t('coursesDescriptions.level_3_certificate_in_hair_extension_services')
          }
        ],
        "image": imageHairdressing
      },
      {
        "group": "Barbering Courses",
        "groupKey": "barbering_courses",
        "category": CategoryI.Beauty,
        "description": t('coursesGroup.barbering_courses.description'),
        "courses": [
          {
            "heading": "Level 2 Certificate in Barbering",
            "courseKey": "level_2_certificate_in_barbering",
            "completeDescription": t('coursesDescriptions.level_2_certificate_in_barbering')
          }
        ],
        "image": imageBarbering
      },
      {
        "group": "Advanced Aesthetic Courses",
        "groupKey": "advanced_aesthetic_courses",
        "category": CategoryI.Beauty,
        "description": t('coursesGroup.advanced_aesthetic_courses.description'),
        "courses": [
          {
            "heading": "Level 3 Diploma in Aesthetic Practice",
            "courseKey": "level_3_diploma_in_aesthetic_practice",
            "completeDescription": t('coursesDescriptions.level_3_diploma_in_aesthetic_practice')
          },
          {
            "heading": "Level 4 Diploma in Aesthetic Treatments and Skincare",
            "courseKey": "level_4_diploma_in_aesthetic_treatments_and_skincare",
            "completeDescription": t('coursesDescriptions.level_4_diploma_in_aesthetic_treatments_and_skincare')
          },
          {
            "heading": "Level 4 Diploma in Laser, IPL, and Electrical Treatments",
            "courseKey": "level_4_diploma_in_laser_ipl_and_electrical_treatments",
            "completeDescription": t('coursesDescriptions.level_4_diploma_in_laser_ipl_and_electrical_treatments')
          },
          {
            "heading": "Level 4 Certificate in Skin Tightening",
            "courseKey": "level_4_certificate_in_skin_tightening",
            "completeDescription": t('coursesDescriptions.level_4_certificate_in_skin_tightening')
          },
          {
            "heading": "Level 4 Diploma in Aesthetic Treatments and Skin Science",
            "courseKey": "level_4_diploma_in_aesthetic_treatments_and_skin_science",
            "completeDescription": t('coursesDescriptions.level_4_diploma_in_aesthetic_treatments_and_skin_science')
          },
          {
            "heading": "ProQual Level 6 Diploma in Aesthetic Practice",
            "courseKey": "proqual_level_6_diploma_in_aesthetic_practice",
            "completeDescription": t('coursesDescriptions.proqual_level_6_diploma_in_aesthetic_practice')
          },
          {
            "heading": "ProQual Level 7 Diploma in Aesthetic Practice",
            "courseKey": "proqual_level_7_diploma_in_aesthetic_practice",
            "completeDescription": t('coursesDescriptions.proqual_level_7_diploma_in_aesthetic_practice')
          },
          {
            "heading": "ProQual Level 7 Diploma in Facial Treatments Using Botulinum Toxin",
            "courseKey": "proqual_level_7_diploma_in_facial_treatments_using_botulinum_toxin",
            "completeDescription": t('coursesDescriptions.proqual_level_7_diploma_in_facial_treatments_using_botulinum_toxin')
          },
          {
            "heading": "ProQual Level 7 Diploma in Mono and Polydioxanone Thread Treatments",
            "courseKey": "proqual_level_7_diploma_in_mono_and_polydioxanone_thread_treatments",
            "completeDescription": t('coursesDescriptions.proqual_level_7_diploma_in_mono_and_polydioxanone_thread_treatments')
          }
        ],
        "image": imageAESTHETIC
      },
      {
        "group": "Health and Safety Courses",
        "groupKey": "health_and_safety_courses",
        "category": CategoryI.Construction,
        "description": t('coursesGroup.health_and_safety_courses.description'),
        "courses": [
          {
            "heading": "Level 1 Award in Health and Safety in a Construction Environment",
            "courseKey": "level_1_award_in_health_and_safety_in_a_construction_environment",
            "completeDescription": t('coursesDescriptions.level_1_award_in_health_and_safety_in_a_construction_environment')
          }
        ],
        "image": imageConstructionSafety
      },
      {
        "group": "Asbestos Courses",
        "groupKey": "asbestos_courses",
        "category": CategoryI.Construction,
        "description": t('coursesGroup.asbestos_courses.description'),
        "courses": [
          {
            "heading": "Level 2 Award in Asbestos Awareness",
            "courseKey": "level_2_award_in_asbestos_awareness",
            "completeDescription": t('coursesDescriptions.level_2_award_in_asbestos_awareness')
          },
          {
            "heading": "Level 2 Certificate in Asbestos Removal for Operatives",
            "courseKey": "level_2_certificate_in_asbestos_removal_for_operatives",
            "completeDescription": t('coursesDescriptions.level_2_certificate_in_asbestos_removal_for_operatives')
          }
        ],
        "image": imageWarning
      },
      {
        "group": "Driving Courses",
        "groupKey": "driving_courses",
        "category": CategoryI.Construction,
        "description": t('coursesGroup.driving_courses.description'),
        "courses": [
          {
            "heading": "Level 2 Certificate in Driving Goods Vehicles",
            "courseKey": "level_2_certificate_in_driving_goods_vehicles",
            "completeDescription": t('coursesDescriptions.level_2_certificate_in_driving_goods_vehicles')
          }
        ],
        "image": imageGoodsVehicles
      },
      {
        "group": "Painting Courses",
        "groupKey": "painting_courses",
        "category": CategoryI.Construction,
        "description": t('coursesGroup.painting_courses.description'),
        "courses": [
          {
            "heading": "Level 2 NVQ Diploma in Decorative Finishing and Industrial Painting Occupations",
            "courseKey": "level_2_nvq_diploma_in_decorative_finishing_and_industrial_painting_occupations",
            "completeDescription": t('coursesDescriptions.level_2_nvq_diploma_in_decorative_finishing_and_industrial_painting_occupations')
          }
        ],
        "image": imagePainting
      },
      {
        "group": "Fitting and Interiors Courses",
        "groupKey": "fitting_and_interiors_courses",
        "category": CategoryI.Construction,
        "description": t('coursesGroup.fitting_and_interiors_courses.description'),
        "courses": [
          {
            "heading": "Level 2 NVQ Certificate in Fitted Interiors",
            "courseKey": "level_2_nvq_certificate_in_fitted_interiors",
            "completeDescription": t('coursesDescriptions.level_2_nvq_certificate_in_fitted_interiors')
          }
        ],
        "image": imageFittingandInteriors
      },
      {
        "group": "Plastering Courses",
        "groupKey": "plastering_courses",
        "category": CategoryI.Construction,
        "description": t('coursesGroup.plastering_courses.description'),
        "courses": [
          {
            "heading": "Level 2 NVQ Diploma in Plastering",
            "courseKey": "level_2_nvq_diploma_in_plastering",
            "completeDescription": t('coursesDescriptions.level_2_nvq_diploma_in_plastering')
          }
        ],
        "image": imagePlastering
      },
      {
        "group": "Wood Occupations Courses",
        "groupKey": "wood_occupations_courses",
        "category": CategoryI.Construction,
        "description": t('coursesGroup.wood_occupations_courses.description'),
        "courses": [
          {
            "heading": "Level 2 NVQ Diploma in Wood Occupations",
            "courseKey": "level_2_nvq_diploma_in_wood_occupations",
            "completeDescription": t('coursesDescriptions.level_2_nvq_diploma_in_wood_occupations')
          }
        ],
        "image": imageBuilder
      },
      {
        "group": "Civil Engineering Courses",
        "groupKey": "civil_engineering_courses",
        "category": CategoryI.Construction,
        "description": t('coursesGroup.civil_engineering_courses.description'),
        "courses": [
          {
            "heading": "Level 2 NVQ Diploma in Construction and Civil Engineering Operations",
            "courseKey": "level_2_nvq_diploma_in_construction_and_civil_engineering_operations",
            "completeDescription": t('coursesDescriptions.level_2_nvq_diploma_in_construction_and_civil_engineering_operations')
          }
        ],
        "image": imageCivilEngineering
      },
      {
        "group": "Cladding Courses",
        "groupKey": "cladding_courses",
        "category": CategoryI.Construction,
        "description": t('coursesGroup.cladding_courses.description'),
        "courses": [
          {
            "heading": "Level 2 NVQ Diploma in Cladding Occupations",
            "courseKey": "level_2_nvq_diploma_in_cladding_occupations",
            "completeDescription": t('coursesDescriptions.level_2_nvq_diploma_in_cladding_occupations')
          }
        ],
        "image": imageCladding
      },
      {
        "group": "Tiling Courses",
        "groupKey": "tiling_courses",
        "category": CategoryI.Construction,
        "description": t('coursesGroup.tiling_courses.description'),
        "courses": [
          {
            "heading": "Level 2 NVQ Certificate in Wall and Floor Tiling",
            "courseKey": "level_2_nvq_certificate_in_wall_and_floor_tiling",
            "completeDescription": t('coursesDescriptions.level_2_nvq_certificate_in_wall_and_floor_tiling')
          }
        ],
        "image": imageTiling
      },
      {
        "group": "General Construction Courses",
        "groupKey": "general_construction_courses",
        "category": CategoryI.Construction,
        "description": t('coursesGroup.general_construction_courses.description'),
        "courses": [
          {
            "heading": "Level 2 Diploma in Construction Operations",
            "courseKey": "level_2_diploma_in_construction_operations",
            "completeDescription": t('coursesDescriptions.level_2_diploma_in_construction_operations')
          }
        ],
        "image": imageConstruction
      },
      {
        "group": "Multi-trade Courses",
        "groupKey": "multitrade_courses",
        "category": CategoryI.Construction,
        "description": t('coursesGroup.multitrade_courses.description'),
        "courses": [
          {
            "heading": "Level 2 NVQ Diploma in Building Maintenance Multi-trade Repair and Refurbishment Operations",
            "courseKey": "level_2_nvq_diploma_in_building_maintenance_multitrade_repair_and_refurbishment_operations",
            "completeDescription": t('coursesDescriptions.level_2_nvq_diploma_in_building_maintenance_multitrade_repair_and_refurbishment_operations')
          }
        ],
        "image": imageBuilder
      },
      {
        "group": "Ground Works Courses",
        "groupKey": "ground_works_courses",
        "category": CategoryI.Construction,
        "description": t('coursesGroup.ground_works_courses.description'),
        "courses": [
          {
            "heading": "Level 2 Diploma in Ground Works Operations",
            "courseKey": "level_2_diploma_in_ground_works_operations",
            "completeDescription": t('coursesDescriptions.level_2_diploma_in_ground_works_operations')
          }
        ],
        "image": imageGround
      },
      {
        "group": "Legal Advice Courses",
        "groupKey": "legal_advice_courses",
        "category": CategoryI.Law,
        "description": t('coursesGroup.legal_advice_courses.description'),
        "courses": [
          {
            "heading": "Level 3 Award in Providing Initial Legal Advice",
            "courseKey": "level_3_award_in_providing_initial_legal_advice",
            "completeDescription": t('coursesDescriptions.level_3_award_in_providing_initial_legal_advice')
          },
          {
            "heading": "Level 4 Award in Understanding Disclosure of Information",
            "courseKey": "level_4_award_in_understanding_disclosure_of_information",
            "completeDescription": t('coursesDescriptions.level_4_award_in_understanding_disclosure_of_information')
          },
          {
            "heading": "Level 5 Diploma in Law",
            "courseKey": "level_5_diploma_in_law",
            "completeDescription": t('coursesDescriptions.level_5_diploma_in_law')
          }
        ],
        "image": imageLaw
      },
      {
        "group": "IT User Skills Courses",
        "groupKey": "it_user_skills_courses",
        "category": CategoryI.IT,
        "description": t('coursesGroup.it_user_skills_courses.description'),
        "courses": [
          {
            "heading": "Level 2 Diploma in IT User Skills",
            "courseKey": "level_2_diploma_in_it_user_skills",
            "completeDescription": t('coursesDescriptions.level_2_diploma_in_it_user_skills')
          }
        ],
        "image": imageIT
      }
    ]; 

    return { groupedCourses }
}
 