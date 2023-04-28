import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerTemplateIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerTemplateIcon = React.forwardRef<SVGSVGElement, TablerTemplateIconProps>(function TablerTemplateIcon(
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
			<path d="M4 4m0 1a1 1 0 0 1 1 -1h14a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-14a1 1 0 0 1 -1 -1z" />
			<path d="M4 12m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
			<path d="M14 12l6 0" />
			<path d="M14 16l6 0" />
			<path d="M14 20l6 0" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerTemplateIcon.displayName = "TablerTemplateIcon";
}
