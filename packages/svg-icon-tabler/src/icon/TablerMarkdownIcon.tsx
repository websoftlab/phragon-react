import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMarkdownIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMarkdownIcon = React.forwardRef<SVGSVGElement, TablerMarkdownIconProps>(function TablerMarkdownIcon(
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
			<path d="M3 5m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
			<path d="M7 15v-6l2 2l2 -2v6" />
			<path d="M14 13l2 2l2 -2m-2 2v-6" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerMarkdownIcon.displayName = "TablerMarkdownIcon";
}
