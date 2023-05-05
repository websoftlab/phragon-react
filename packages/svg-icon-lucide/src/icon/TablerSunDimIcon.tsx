import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerSunDimIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerSunDimIcon = React.forwardRef<SVGSVGElement, TablerSunDimIconProps>(function TablerSunDimIcon(
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
			<path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
			<path d="M12 4h.01" />
			<path d="M20 12h.01" />
			<path d="M12 20h.01" />
			<path d="M4 12h.01" />
			<path d="M17.657 6.343h.01" />
			<path d="M17.657 17.657h.01" />
			<path d="M6.343 17.657h.01" />
			<path d="M6.343 6.343h.01" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerSunDimIcon.displayName = "TablerSunDimIcon";
}
