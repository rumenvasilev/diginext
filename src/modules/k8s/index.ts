import { rolloutV2 } from "../deploy/deploy-rollout";
import authCluster, { authClusterBySlug } from "./cluster-auth";
import { createImagePullSecretsInNamespace } from "./image-pull-secret";
import { currentCluster, currentContext, getKubeConfig, getKubeContextByCluster, getKubeContextByClusterSlug } from "./kube-config";
import { previewPrerelease, rollout } from "./kube-deploy";
import {
	createNamespace,
	deleteDeploy,
	deleteDeploymentsByFilter,
	deleteEnvVar,
	deleteEnvVarByFilter,
	deleteIngress,
	deleteIngressByFilter,
	deleteNamespace,
	deleteNamespaceByCluster,
	deletePersistentVolume,
	deletePersistentVolumeClaim,
	deletePersistentVolumeClaimsByFilter,
	deletePersistentVolumesByFilter,
	deletePod,
	deletePodsByFilter,
	deleteSecret,
	deleteSecretsByFilter,
	deleteService,
	deleteServiceByFilter,
	deleteStatefulSet,
	deleteStatefulSetsByFilter,
	deleteStorageClass,
	deleteStorageClassesByFilter,
	getAllDeploys,
	getAllIngresses,
	getAllNamespaces,
	getAllNodes,
	getAllPersistentVolumeClaims,
	getAllPersistentVolumes,
	getAllPods,
	getAllSecrets,
	getAllServices,
	getAllStatefulSets,
	getAllStorageClasses,
	getDeploy,
	getDeploys,
	getDeploysByFilter,
	getIngress,
	getIngressClasses,
	getIngresses,
	getNamespace,
	getPersistentVolume,
	getPersistentVolumeClaim,
	getPersistentVolumeClaims,
	getPersistentVolumeClaimsByFilter,
	getPersistentVolumes,
	getPersistentVolumesByFilter,
	getPod,
	getPods,
	getPodsByFilter,
	getSecrets,
	getService,
	getServices,
	getStatefulSet,
	getStatefulSets,
	getStatefulSetsByFilter,
	getStorageClass,
	getStorageClasses,
	getStorageClassesByFilter,
	isNamespaceExisted,
	isSecretExisted,
	kubectlAnnotateDeployment,
	kubectlApply,
	kubectlApplyContent,
	logPod,
	logPodByFilter,
	rollbackDeploy,
	rollbackDeployRevision,
	scaleDeploy,
	scaleDeployByFilter,
	setDeployImage,
	setDeployImageAll,
	setDeployImagePullSecretByFilter,
	setDeployPortAll,
	setEnvVar,
	setEnvVarByFilter,
} from "./kubectl";
import { checkCertManagerInstalled, checkNginxIngressInstalled } from "./stack-check";
import { installCertManagerStack, installNginxIngressStack } from "./stack-install";

const ClusterManager = {
	// cluster-helpers
	authCluster,
	authClusterBySlug,
	createImagePullSecretsInNamespace,
	currentContext,
	currentCluster,
	// kube-helpers
	getNamespace,
	createNamespace,
	deleteNamespace,
	deleteNamespaceByCluster,
	deleteSecret,
	deleteDeploy,
	deleteDeploymentsByFilter,
	deleteEnvVar,
	deleteEnvVarByFilter,
	deleteIngressByFilter,
	deleteIngress,
	deletePod,
	deletePodsByFilter,
	deleteSecretsByFilter,
	deleteService,
	deleteServiceByFilter,
	deleteStatefulSet,
	deleteStatefulSetsByFilter,
	getKubeConfig,
	getKubeContextByClusterShortName: getKubeContextByClusterSlug,
	getKubeContextByCluster,
	getDeploys,
	getDeploysByFilter,
	getStatefulSet,
	getStatefulSets,
	getStatefulSetsByFilter,
	getAllNodes,
	getPod,
	getPodsByFilter,
	getPods,
	getSecrets,
	getServices,
	getService,
	getIngresses,
	getIngress,
	getIngressClasses,
	getDeploy,
	getAllIngresses,
	getAllDeploys,
	getAllStatefulSets,
	getAllPods,
	getAllNamespaces,
	getAllSecrets,
	getAllServices,
	logPod,
	logPodByFilter,
	isNamespaceExisted,
	isSecretExisted,
	setEnvVar,
	setEnvVarByFilter,
	setDeployImage,
	setDeployImageAll,
	setDeployImagePullSecretByFilter,
	setDeployPortAll,
	scaleDeploy,
	scaleDeployByFilter,
	// volumes & storages
	getPersistentVolume,
	getAllPersistentVolumes,
	getPersistentVolumesByFilter,
	getPersistentVolumes,
	deletePersistentVolume,
	deletePersistentVolumesByFilter,
	getPersistentVolumeClaim,
	getPersistentVolumeClaims,
	getAllPersistentVolumeClaims,
	getPersistentVolumeClaimsByFilter,
	deletePersistentVolumeClaim,
	deletePersistentVolumeClaimsByFilter,
	getStorageClass,
	getAllStorageClasses,
	getStorageClasses,
	getStorageClassesByFilter,
	deleteStorageClass,
	deleteStorageClassesByFilter,
	// deploy
	previewPrerelease,
	rollout,
	rolloutV2,
	kubectlApply,
	kubectlApplyContent,
	kubectlAnnotateDeployment,
	rollbackDeploy,
	rollbackDeployRevision,
	// stacks
	checkCertManagerInstalled,
	checkNginxIngressInstalled,
	installCertManagerStack,
	installNginxIngressStack,
};

export default ClusterManager;
