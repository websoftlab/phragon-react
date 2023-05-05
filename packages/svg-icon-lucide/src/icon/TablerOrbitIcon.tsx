import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerOrbitIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerOrbitIcon = React.forwardRef<SVGSVGElement, TablerOrbitIconProps>(function TablerOrbitIcon(
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
			<path d="M15 12 A3 3 0 0 1 12 15 A3 3 0 0 1 9 12 A3 3 0 0 1 15 12" />
			<path d="M20 6 A2 2 0 0 1 18 8 A2 2 0 0 1 16 6 A2 2 0 0 1 20 6" />
			<path d="M8 18 A2 2 0 0 1 6 20 A2 2 0 0 1 4 18 A2 2 0 0 1 8 18" />
			<path d="M12 20a8 8 0 0 0 6.82-12.17" />
			<path d="M12 4a8 8 0 0 0-6.82 12.17" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerOrbitIcon.displayName = "TablerOrbitIcon";
}
