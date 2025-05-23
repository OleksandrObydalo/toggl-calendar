export const config = {
    workingHours: {
        start: 8,  // Starting from 8:00
        end: 18    // Ending at 18:00
    },
    defaultProjectColors: [
        "#4A90E2", // Blue
        "#32CD32", // Green
        "#E74C3C", // Red
        "#9B59B6", // Purple
        "#F39C12", // Orange
        "#1ABC9C", // Teal
        "#34495E"  // Dark Blue
    ],
    activityTags: [
        { id: 1, name: "Development", color: "#4A90E2" },
        { id: 2, name: "Meetings", color: "#E74C3C" },
        { id: 3, name: "Administrative", color: "#F39C12" },
        { id: 4, name: "Research", color: "#9B59B6" },
        { id: 5, name: "Design", color: "#1ABC9C" }
    ],
    timeFormat: {
        hour12: false,
        hour: "2-digit",
        minute: "2-digit"
    },
    dateFormat: {
        weekday: 'short',
        month: 'short',
        day: 'numeric'
    },
    daysToShow: 7, 
    themes: {
        light: "light",
        dark: "dark-theme",
        oceanic: "oceanic-theme",
        sunset: "sunset-theme",
        purple: "purple-theme"
    },
    translations: {
        en: {
            projects: "Projects",
            whatAreYouWorkingOn: "What are you working on?",
            selectProject: "Select project",
            start: "Start",
            stop: "Stop",
            todayActivities: "Today's Activities",
            taskTimeSummary: "Task Time Summary",
            noProject: "No Project",
            lightMode: "Light Mode",
            darkMode: "Dark Mode",
            activityDetails: "Activity Details",
            description: "Description:",
            project: "Project:",
            startTime: "Start Time:",
            endTime: "End Time:",
            duration: "Duration:",
            continue: "Continue",
            delete: "Delete",
            editTime: "Edit Time",
            save: "Save",
            cancel: "Cancel",
            weekdays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            monthNames: ["January", "February", "March", "April", "May", "June", 
                         "July", "August", "September", "October", "November", "December"],
            date: "Date",
            endTimeMustBeAfterStart: "End time must be after start time",
            addProject: "Add Project",
            editProject: "Edit Project",
            name: "Name:",
            color: "Color:",
            edit: "Edit",
            projectNameRequired: "Project name is required",
            cannotDeleteProjectInUse: "Cannot delete a project that is in use",
            timeGoals: "Time Goals",
            weeklyGoals: "Weekly Goals",
            setTimeGoal: "Set Time Goal",
            editTimeGoal: "Edit Time Goal",
            goalDescription: "Description:",
            targetHours: "Target Hours:",
            progress: "Progress:",
            addGoal: "Add Goal",
            planned: "Planned",
            actual: "Actual",
            weeklyProductivity: "Weekly Productivity",
            compareTime: "Compare Planned vs Actual",
            goalNameRequired: "Goal description is required",
            goalTargetRequired: "Target hours are required",
            goalExists: "A goal with this description already exists",
            goalAdded: "Goal added successfully",
            goalUpdated: "Goal updated successfully",
            goalDeleted: "Goal deleted successfully",
            tags: "Tags",
            selectTags: "Select tags",
            noTags: "No tags selected",
            subprojects: "Subprojects",
            addSubproject: "Add Subproject",
            parentProject: "Parent Project",
            projectDetails: "Project Details",
            cannotDeleteProjectWithSubprojects: "Cannot delete a project with subprojects",
            activityType: "Activity Type",
            categorySystem: "Categorization",
            hierarchicalView: "Hierarchical View",
            flatView: "Flat View",
            categorizeActivity: "Categorize Your Activity"
        },
        uk: {
            projects: "Проекти",
            whatAreYouWorkingOn: "Над чим ви працюєте?",
            selectProject: "Вибрати проект",
            start: "Почати",
            stop: "Зупинити",
            todayActivities: "Сьогоднішні активності",
            taskTimeSummary: "Підсумок часу завдань",
            noProject: "Без проекту",
            lightMode: "Світла тема",
            darkMode: "Темна тема",
            activityDetails: "Деталі активності",
            description: "Опис:",
            project: "Проект:",
            startTime: "Час початку:",
            endTime: "Час завершення:",
            duration: "Тривалість:",
            continue: "Продовжити",
            delete: "Видалити",
            editTime: "Редагувати час",
            save: "Зберегти",
            cancel: "Скасувати",
            weekdays: ["Нд", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
            monthNames: ["Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень", 
                         "Липень", "Серпень", "Вересень", "Жовтень", "Листопад", "Грудень"],
            date: "Дата",
            endTimeMustBeAfterStart: "Час закінчення має бути пізніше від часу початку",
            addProject: "Додати проект",
            editProject: "Редагувати проект",
            name: "Назва:",
            color: "Колір:",
            edit: "Редагувати",
            projectNameRequired: "Назва проекту обов'язкова",
            cannotDeleteProjectInUse: "Неможливо видалити проект, який використовується",
            timeGoals: "Цілі Часу",
            weeklyGoals: "Тижневі Цілі",
            setTimeGoal: "Встановити Ціль Часу",
            editTimeGoal: "Редагувати Ціль Часу",
            goalDescription: "Опис:",
            targetHours: "Цільові Години:",
            progress: "Прогрес:",
            addGoal: "Додати Ціль",
            planned: "Заплановано",
            actual: "Фактично",
            weeklyProductivity: "Тижнева Продуктивність",
            compareTime: "Порівняти Заплановане та Фактичне",
            goalNameRequired: "Опис цілі обов'язковий",
            goalTargetRequired: "Цільові години обов'язкові",
            goalExists: "Ціль з таким описом вже існує",
            goalAdded: "Ціль успішно додано",
            goalUpdated: "Ціль успішно оновлено",
            goalDeleted: "Ціль успішно видалено",
            tags: "Теги",
            selectTags: "Виберіть теги",
            noTags: "Немає вибраних тегів",
            subprojects: "Підпроекти",
            addSubproject: "Додати підпроект",
            parentProject: "Батьківський Проект",
            projectDetails: "Деталі Проекту",
            cannotDeleteProjectWithSubprojects: "Неможливо видалити проект з підпроектами",
            activityType: "Тип Активності",
            categorySystem: "Категоризація",
            hierarchicalView: "Ієрархічний Вигляд",
            flatView: "Плоский Вигляд",
            categorizeActivity: "Категоризуйте Вашу Активність"
        },
        fr: {
            projects: "Projets",
            whatAreYouWorkingOn: "Sur quoi travaillez-vous?",
            selectProject: "Sélectionner un projet",
            start: "Démarrer",
            stop: "Arrêter",
            todayActivities: "Activités du jour",
            taskTimeSummary: "Résumé du temps des tâches",
            noProject: "Aucun projet",
            lightMode: "Mode clair",
            darkMode: "Mode sombre",
            activityDetails: "Détails de l'activité",
            description: "Description:",
            project: "Projet:",
            startTime: "Heure de début:",
            endTime: "Heure de fin:",
            duration: "Durée:",
            continue: "Continuer",
            delete: "Supprimer",
            editTime: "Modifier l'heure",
            save: "Enregistrer",
            cancel: "Annuler",
            weekdays: ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"],
            monthNames: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", 
                         "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"],
            date: "Date",
            endTimeMustBeAfterStart: "L'heure de fin doit être après l'heure de début",
            addProject: "Ajouter un projet",
            editProject: "Modifier le projet",
            name: "Nom:",
            color: "Couleur:",
            edit: "Modifier",
            projectNameRequired: "Le nom du projet est requis",
            cannotDeleteProjectInUse: "Impossible de supprimer un projet en cours d'utilisation",
            timeGoals: "Objectifs de Temps",
            weeklyGoals: "Objectifs Hebdomadaires",
            setTimeGoal: "Définir un Objectif de Temps",
            editTimeGoal: "Modifier l'Objectif de Temps",
            goalDescription: "Description:",
            targetHours: "Heures Cibles:",
            progress: "Progression:",
            addGoal: "Ajouter un Objectif",
            planned: "Prévu",
            actual: "Réel",
            weeklyProductivity: "Productivité Hebdomadaire",
            compareTime: "Comparer Prévu vs Réel",
            goalNameRequired: "La description de l'objectif est requise",
            goalTargetRequired: "Les heures cibles sont requises",
            goalExists: "Un objectif avec cette description existe déjà",
            goalAdded: "Objectif ajouté avec succès",
            goalUpdated: "Objectif mis à jour avec succès",
            goalDeleted: "Objectif supprimé avec succès",
            tags: "Tags",
            selectTags: "Sélectionner les tags",
            noTags: "Aucun tag sélectionné",
            subprojects: "Sous-projets",
            addSubproject: "Ajouter un sous-projet",
            parentProject: "Projet Parent",
            projectDetails: "Détails du Projet",
            cannotDeleteProjectWithSubprojects: "Impossible de supprimer un projet avec des sous-projets",
            activityType: "Type d'Activité",
            categorySystem: "Catégorisation",
            hierarchicalView: "Vue Hiérarchique",
            flatView: "Vue Plate",
            categorizeActivity: "Catégorisez Votre Activité"
        },
        de: {
            projects: "Projekte",
            whatAreYouWorkingOn: "Woran arbeitest du?",
            selectProject: "Projekt auswählen",
            start: "Start",
            stop: "Stopp",
            todayActivities: "Heutige Aktivitäten",
            taskTimeSummary: "Zeitübersicht der Aufgaben",
            noProject: "Kein Projekt",
            lightMode: "Heller Modus",
            darkMode: "Dunkler Modus",
            activityDetails: "Aktivitätsdetails",
            description: "Beschreibung:",
            project: "Projekt:",
            startTime: "Startzeit:",
            endTime: "Endzeit:",
            duration: "Dauer:",
            continue: "Fortsetzen",
            delete: "Löschen",
            editTime: "Zeit bearbeiten",
            save: "Speichern",
            cancel: "Abbrechen",
            weekdays: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
            monthNames: ["Januar", "Februar", "März", "April", "Mai", "Juni", 
                         "Juli", "August", "September", "Oktober", "November", "Dezember"],
            date: "Datum",
            endTimeMustBeAfterStart: "Endzeit muss nach Startzeit liegen",
            addProject: "Projekt hinzufügen",
            editProject: "Projekt bearbeiten",
            name: "Name:",
            color: "Farbe:",
            edit: "Bearbeiten",
            projectNameRequired: "Projektname ist erforderlich",
            cannotDeleteProjectInUse: "Ein verwendetes Projekt kann nicht gelöscht werden",
            timeGoals: "Zeitziele",
            weeklyGoals: "Wöchentliche Ziele",
            setTimeGoal: "Zeitziel festlegen",
            editTimeGoal: "Zeitziel bearbeiten",
            goalDescription: "Beschreibung:",
            targetHours: "Zielstunden:",
            progress: "Fortschritt:",
            addGoal: "Ziel hinzufügen",
            planned: "Geplant",
            actual: "Tatsächlich",
            weeklyProductivity: "Wöchentliche Produktivität",
            compareTime: "Geplant vs. Tatsächlich vergleichen",
            goalNameRequired: "Zielbeschreibung ist erforderlich",
            goalTargetRequired: "Zielstunden sind erforderlich",
            goalExists: "Ein Ziel mit dieser Beschreibung existiert bereits",
            goalAdded: "Ziel erfolgreich hinzugefügt",
            goalUpdated: "Ziel erfolgreich aktualisiert",
            goalDeleted: "Ziel erfolgreich gelöscht",
            tags: "Tags",
            selectTags: "Tags auswählen",
            noTags: "Keine Tags ausgewählt",
            subprojects: "Unterprojekte",
            addSubproject: "Unterprojekt hinzufügen",
            parentProject: "Übergeordnetes Projekt",
            projectDetails: "Projektdetails",
            cannotDeleteProjectWithSubprojects: "Ein Projekt mit Unterprojekten kann nicht gelöscht werden",
            activityType: "Aktivitätstyp",
            categorySystem: "Kategorisierung",
            hierarchicalView: "Hierarchische Ansicht",
            flatView: "Flache Ansicht",
            categorizeActivity: "Kategorisiere deine Aktivität"
        }
    }
};