import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerDroneOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerDroneOffIcon = React.forwardRef<SVGSVGElement, TablerDroneOffIconProps>(function TablerDroneOffIcon(
	props,
	ref
) {
	const { children, ...rest } = props;
	return (
		<SvgIcon
			stroke="currentColor"
			strokeWidth={2}
			strokeLinecap="round"
			strokeLinejoin="round"
			{...rest}
			ref={ref}
			size={24}
			icon={undefined}
			fill="none"
		>
			<path d="M14 14h-4v-4" />
			<path d="M10 10l-3.5 -3.5" />
			<path d="M9.957 5.95a3.503 3.503 0 0 0 -2.917 -2.91m-3.02 .989a3.5 3.5 0 0 0 1.98 5.936" />
			<path d="M14 10l3.5 -3.5" />
			<path d="M18 9.965a3.5 3.5 0 1 0 -3.966 -3.965" />
			<path d="M14 14l3.5 3.5" />
			<path d="M14.035 18a3.5 3.5 0 0 0 5.936 1.98m.987 -3.026a3.503 3.503 0 0 0 -2.918 -2.913" />
			<path d="M10 14l-3.5 3.5" />
			<path d="M6 14.035a3.5 3.5 0 1 0 3.966 3.965" />
			<path d="M3 3l18 18" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerDroneOffIcon.displayName = "TablerDroneOffIcon";
}
