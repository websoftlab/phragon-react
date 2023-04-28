import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBmpIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBmpIcon = React.forwardRef<SVGSVGElement, TablerBmpIconProps>(function TablerBmpIcon(props, ref) {
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
			<path d="M18 16v-8h2a2 2 0 1 1 0 4h-2" />
			<path d="M6 14a2 2 0 0 1 -2 2h-2v-8h2a2 2 0 1 1 0 4h-2h2a2 2 0 0 1 2 2z" />
			<path d="M9 16v-8l3 6l3 -6v8" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerBmpIcon.displayName = "TablerBmpIcon";
}
