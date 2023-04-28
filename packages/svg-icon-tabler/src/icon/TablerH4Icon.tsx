import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerH4IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerH4Icon = React.forwardRef<SVGSVGElement, TablerH4IconProps>(function TablerH4Icon(props, ref) {
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
			<path d="M20 18v-8l-4 6h5" />
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
	TablerH4Icon.displayName = "TablerH4Icon";
}
