import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerArticleIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerArticleIcon = React.forwardRef<SVGSVGElement, TablerArticleIconProps>(function TablerArticleIcon(
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
			<path d="M3 4m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
			<path d="M7 8h10" />
			<path d="M7 12h10" />
			<path d="M7 16h10" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerArticleIcon.displayName = "TablerArticleIcon";
}
