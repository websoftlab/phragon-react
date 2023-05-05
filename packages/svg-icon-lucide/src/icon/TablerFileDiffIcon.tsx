import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerFileDiffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerFileDiffIcon = React.forwardRef<SVGSVGElement, TablerFileDiffIconProps>(function TablerFileDiffIcon(
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
			<path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
			<path d="M12 13V7" />
			<path d="M9 10h6" />
			<path d="M9 17h6" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerFileDiffIcon.displayName = "TablerFileDiffIcon";
}
