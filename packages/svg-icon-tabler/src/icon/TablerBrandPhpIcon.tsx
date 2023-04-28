import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBrandPhpIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBrandPhpIcon = React.forwardRef<SVGSVGElement, TablerBrandPhpIconProps>(function TablerBrandPhpIcon(
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
			<path d="M12 12m-10 0a10 9 0 1 0 20 0a10 9 0 1 0 -20 0" />
			<path d="M5.5 15l.395 -1.974l.605 -3.026h1.32a1 1 0 0 1 .986 1.164l-.167 1a1 1 0 0 1 -.986 .836h-1.653" />
			<path d="M15.5 15l.395 -1.974l.605 -3.026h1.32a1 1 0 0 1 .986 1.164l-.167 1a1 1 0 0 1 -.986 .836h-1.653" />
			<path d="M12 7.5l-1 5.5" />
			<path d="M11.6 10h2.4l-.5 3" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerBrandPhpIcon.displayName = "TablerBrandPhpIcon";
}
