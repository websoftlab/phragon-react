import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerStepBackIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerStepBackIcon = React.forwardRef<SVGSVGElement, TablerStepBackIconProps>(function TablerStepBackIcon(
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
			<path d="M18 20 L18 4" />
			<path d="M14 20 L4 12 L14 4Z" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerStepBackIcon.displayName = "TablerStepBackIcon";
}
