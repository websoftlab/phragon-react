import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerScalingIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerScalingIcon = React.forwardRef<SVGSVGElement, TablerScalingIconProps>(function TablerScalingIcon(
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
			<path d="M21 3 9 15" />
			<path d="M12 3H3v18h18v-9" />
			<path d="M16 3h5v5" />
			<path d="M14 15H9v-5" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerScalingIcon.displayName = "TablerScalingIcon";
}
