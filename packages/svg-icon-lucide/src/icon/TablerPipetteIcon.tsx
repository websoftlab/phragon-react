import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerPipetteIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerPipetteIcon = React.forwardRef<SVGSVGElement, TablerPipetteIconProps>(function TablerPipetteIcon(
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
			<path d="m2 22 1-1h3l9-9" />
			<path d="M3 21v-3l9-9" />
			<path d="m15 6 3.4-3.4a2.1 2.1 0 1 1 3 3L18 9l.4.4a2.1 2.1 0 1 1-3 3l-3.8-3.8a2.1 2.1 0 1 1 3-3l.4.4Z" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerPipetteIcon.displayName = "TablerPipetteIcon";
}
