import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBrandNpmIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBrandNpmIcon = React.forwardRef<SVGSVGElement, TablerBrandNpmIconProps>(function TablerBrandNpmIcon(
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
			<path d="M1 8h22v7h-12v2h-4v-2h-6z" />
			<path d="M7 8v7" />
			<path d="M14 8v7" />
			<path d="M17 11v4" />
			<path d="M4 11v4" />
			<path d="M11 11v1" />
			<path d="M20 11v4" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerBrandNpmIcon.displayName = "TablerBrandNpmIcon";
}
