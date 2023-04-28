import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerTentIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerTentIcon = React.forwardRef<SVGSVGElement, TablerTentIconProps>(function TablerTentIcon(props, ref) {
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
			<path d="M11 14l4 6h6l-9 -16l-9 16h6l4 -6" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerTentIcon.displayName = "TablerTentIcon";
}
