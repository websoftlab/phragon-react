import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerKeyframeAlignHorizontalIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerKeyframeAlignHorizontalIcon = React.forwardRef<
	SVGSVGElement,
	TablerKeyframeAlignHorizontalIconProps
>(function TablerKeyframeAlignHorizontalIcon(props, ref) {
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
			<path d="M12.816 16.58c-.207 .267 -.504 .42 -.816 .42c-.312 0 -.61 -.153 -.816 -.42l-2.908 -3.748a1.39 1.39 0 0 1 0 -1.664l2.908 -3.748c.207 -.267 .504 -.42 .816 -.42c.312 0 .61 .153 .816 .42l2.908 3.748a1.39 1.39 0 0 1 0 1.664l-2.908 3.748z" />
			<path d="M3 12h2" />
			<path d="M19 12h2" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerKeyframeAlignHorizontalIcon.displayName = "TablerKeyframeAlignHorizontalIcon";
}
