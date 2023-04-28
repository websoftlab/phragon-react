import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerAdCircleIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerAdCircleIcon = React.forwardRef<SVGSVGElement, TablerAdCircleIconProps>(function TablerAdCircleIcon(
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
			<path d="M12 12m-10 0a10 10 0 1 0 20 0a10 10 0 1 0 -20 0" />
			<path d="M7 15v-4.5a1.5 1.5 0 0 1 3 0v4.5" />
			<path d="M7 13h3" />
			<path d="M14 9v6h1a2 2 0 0 0 2 -2v-2a2 2 0 0 0 -2 -2h-1z" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerAdCircleIcon.displayName = "TablerAdCircleIcon";
}
