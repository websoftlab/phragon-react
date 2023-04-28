import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerH5IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerH5Icon = React.forwardRef<SVGSVGElement, TablerH5IconProps>(function TablerH5Icon(props, ref) {
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
			<path d="M17 18h2a2 2 0 1 0 0 -4h-2v-4h4" />
			<path d="M4 6v12" />
			<path d="M12 6v12" />
			<path d="M11 18h2" />
			<path d="M3 18h2" />
			<path d="M4 12h8" />
			<path d="M3 6h2" />
			<path d="M11 6h2" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerH5Icon.displayName = "TablerH5Icon";
}
