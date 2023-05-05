import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerDiffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerDiffIcon = React.forwardRef<SVGSVGElement, TablerDiffIconProps>(function TablerDiffIcon(props, ref) {
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
			<path d="M12 3v14" />
			<path d="M5 10h14" />
			<path d="M5 21h14" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerDiffIcon.displayName = "TablerDiffIcon";
}
