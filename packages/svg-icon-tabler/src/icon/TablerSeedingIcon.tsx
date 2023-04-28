import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerSeedingIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerSeedingIcon = React.forwardRef<SVGSVGElement, TablerSeedingIconProps>(function TablerSeedingIcon(
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
			<path d="M12 10a6 6 0 0 0 -6 -6h-3v2a6 6 0 0 0 6 6h3" />
			<path d="M12 14a6 6 0 0 1 6 -6h3v1a6 6 0 0 1 -6 6h-3" />
			<path d="M12 20l0 -10" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerSeedingIcon.displayName = "TablerSeedingIcon";
}
