import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCrossIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCrossIcon = React.forwardRef<SVGSVGElement, TablerCrossIconProps>(function TablerCrossIcon(
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
			<path d="M10 21h4v-9h5v-4h-5v-5h-4v5h-5v4h5z" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerCrossIcon.displayName = "TablerCrossIcon";
}
