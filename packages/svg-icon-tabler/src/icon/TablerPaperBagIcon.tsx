import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerPaperBagIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerPaperBagIcon = React.forwardRef<SVGSVGElement, TablerPaperBagIconProps>(function TablerPaperBagIcon(
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
			<path d="M8 3h8a2 2 0 0 1 2 2v1.82a5 5 0 0 0 .528 2.236l.944 1.888a5 5 0 0 1 .528 2.236v5.82a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-5.82a5 5 0 0 1 .528 -2.236l1.472 -2.944v-3a2 2 0 0 1 2 -2z" />
			<path d="M14 15m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
			<path d="M6 21a2 2 0 0 0 2 -2v-5.82a5 5 0 0 0 -.528 -2.236l-1.472 -2.944" />
			<path d="M11 7h2" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerPaperBagIcon.displayName = "TablerPaperBagIcon";
}
