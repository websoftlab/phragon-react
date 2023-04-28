import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerNoteOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerNoteOffIcon = React.forwardRef<SVGSVGElement, TablerNoteOffIconProps>(function TablerNoteOffIcon(
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
			<path d="M13 20l3.505 -3.505m2 -2l1.501 -1.501" />
			<path d="M17 13h3v-7a2 2 0 0 0 -2 -2h-10m-3.427 .6c-.355 .36 -.573 .853 -.573 1.4v12a2 2 0 0 0 2 2h7v-6c0 -.272 .109 -.519 .285 -.699" />
			<path d="M3 3l18 18" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerNoteOffIcon.displayName = "TablerNoteOffIcon";
}
