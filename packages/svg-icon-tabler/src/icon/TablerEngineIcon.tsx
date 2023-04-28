import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerEngineIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerEngineIcon = React.forwardRef<SVGSVGElement, TablerEngineIconProps>(function TablerEngineIcon(
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
			<path d="M3 10v6" />
			<path d="M12 5v3" />
			<path d="M10 5h4" />
			<path d="M5 13h-2" />
			<path d="M6 10h2l2 -2h3.382a1 1 0 0 1 .894 .553l1.448 2.894a1 1 0 0 0 .894 .553h1.382v-2h2a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-2v-2h-3v2a1 1 0 0 1 -1 1h-3.465a1 1 0 0 1 -.832 -.445l-1.703 -2.555h-2v-6z" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerEngineIcon.displayName = "TablerEngineIcon";
}
