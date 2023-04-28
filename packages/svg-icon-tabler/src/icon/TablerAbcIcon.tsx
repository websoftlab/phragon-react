import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerAbcIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerAbcIcon = React.forwardRef<SVGSVGElement, TablerAbcIconProps>(function TablerAbcIcon(props, ref) {
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
			<path d="M3 16v-6a2 2 0 1 1 4 0v6" />
			<path d="M3 13h4" />
			<path d="M10 8v6a2 2 0 1 0 4 0v-1a2 2 0 1 0 -4 0v1" />
			<path d="M20.732 12a2 2 0 0 0 -3.732 1v1a2 2 0 0 0 3.726 1.01" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerAbcIcon.displayName = "TablerAbcIcon";
}
