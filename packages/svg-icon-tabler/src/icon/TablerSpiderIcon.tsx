import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerSpiderIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerSpiderIcon = React.forwardRef<SVGSVGElement, TablerSpiderIconProps>(function TablerSpiderIcon(
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
			<path d="M5 4v2l5 5" />
			<path d="M2.5 9.5l1.5 1.5h6" />
			<path d="M4 19v-2l6 -6" />
			<path d="M19 4v2l-5 5" />
			<path d="M21.5 9.5l-1.5 1.5h-6" />
			<path d="M20 19v-2l-6 -6" />
			<path d="M12 15m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
			<path d="M12 9m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerSpiderIcon.displayName = "TablerSpiderIcon";
}
